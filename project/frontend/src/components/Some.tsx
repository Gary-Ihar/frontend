import { Col, Row, Typography } from 'antd';

type Props = {
  text: string;
  isAdmin?: boolean;
  renderIcon: (isAdmin: boolean) => React.ReactNode;
};

export const Avatar = ({ text, isAdmin, renderIcon }: Props) => {
  return (
    <Row gutter={12}>
      <Col>{renderIcon(!!isAdmin)}</Col>
      <Col flex={1}>
        <Typography.Text>{text}</Typography.Text>
      </Col>
    </Row>
  );
};
