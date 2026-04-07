import { Col, Row, Typography } from 'antd';
import { Outlet } from 'react-router';

const UsersPage = () => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={1}>Main user page title! </Typography.Title>
      </Col>

      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default UsersPage;
