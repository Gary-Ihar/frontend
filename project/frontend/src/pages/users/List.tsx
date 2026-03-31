import { Link, NavLink } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { Table, type TableProps } from 'antd';
import type { User } from '@/types';
import { observer } from 'mobx-react-lite';
import { userState } from '@/states/users';
import { useEffect } from 'react';

const List = observer(() => {
  const { usersList, loadingList } = userState;

  const columns: TableProps<User>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: ['address', 'city'],
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
      key: 'companyName',
      dataIndex: ['company', 'name'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, { id }) => (
        <NavLink to={ROUTES.users.getLinkById(String(id))}>View</NavLink>
      ),
    },
  ];

  useEffect(() => {
    userState.loadList();
  }, []);

  return (
    <Table
      rowKey={'id'}
      columns={columns}
      dataSource={usersList}
      loading={loadingList}
    />
  );
});

export default List;
