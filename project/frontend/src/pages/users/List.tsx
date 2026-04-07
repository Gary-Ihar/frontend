import { Link, NavLink } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { Table, type TableProps } from 'antd';
import type { User } from '@/types';
import { useEffect } from 'react';
import { withState } from '@/states';

const List = withState(({ state: { usersState } }) => {
  const { users, loading } = usersState;

  const columns: TableProps<User>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Web Site',
      key: 'website',
      dataIndex: 'website',
      render: (_, { website }) => (
        <Link target="_blank" to={`https://${website}`}>
          {website}
        </Link>
      ),
    },
    {
      title: 'Company Name',
      key: 'organization',
      dataIndex: 'organization',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, { uuid }) => (
        <NavLink to={ROUTES.users.getLinkById(uuid)}>View</NavLink>
      ),
    },
  ];

  useEffect(() => {
    usersState.load();
  }, [usersState]);

  return (
    <Table
      rowKey={'uuid'}
      columns={columns}
      dataSource={users}
      loading={loading}
    />
  );
});

export default List;
