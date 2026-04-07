import { Link, NavLink } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { Table, type TableProps } from 'antd';
import type { User } from '@/types';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useAppState } from '@/states';

const List = observer(() => {
  const { usersState } = useAppState();
  const { usersList, loadingList } = usersState;

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
      render: (_, { uiid }) => (
        <NavLink to={ROUTES.users.getLinkById(uiid)}>View</NavLink>
      ),
    },
  ];

  useEffect(() => {
    usersState.loadList();
  }, [usersState]);

  return (
    <Table
      rowKey={'uiid'}
      columns={columns}
      dataSource={usersList}
      loading={loadingList}
    />
  );
});

export default List;
