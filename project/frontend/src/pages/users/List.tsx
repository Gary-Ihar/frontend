import { Link } from 'react-router';
import { Button, Table, type TableProps } from 'antd';
import type { User } from '@/types';
import { useEffect, useRef } from 'react';
import { withState } from '@/states';
import { CustomModal, type CustomModalActions } from '@/components/CustomModal';
import { One } from './One';

const List = withState(({ state: { usersState } }) => {
  const { users, loading } = usersState;
  const modalController = useRef<CustomModalActions<User> | null>(null);

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
      render: (_, user) => (
        <Button
          type="primary"
          onClick={() => modalController.current?.open(user)}
        >
          View
        </Button>
      ),
    },
  ];

  useEffect(() => {
    usersState.load();
  }, [usersState]);

  return (
    <>
      <CustomModal<User>
        ref={modalController}
        onOk={() => modalController.current?.close()}
      >
        {(data) => (data ? <One userId={data.uuid} /> : null)}
      </CustomModal>
      <Table
        rowKey={'uuid'}
        columns={columns}
        dataSource={users}
        loading={loading}
      />
    </>
  );
});

export default List;
