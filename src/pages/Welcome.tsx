import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre
    style={{
      background: '#f2f4f5',
      padding: '12px 20px',
      margin: '12px 0',
    }}
  >
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="欢迎使用 大斑马分享屋。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block/block-cn">
          <FormattedMessage
            id="app.welcome.link.block-list"
            defaultMessage="基于 block 开发，快速构建标准页面"
          />
        </a>
      </Typography.Text>
      <CodePreview>npx umi block list</CodePreview>
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/getting-started-cn">
          <FormattedMessage
            id="app.welcome.link.ant-pro-list"
            defaultMessage="基于 Ant Design Pro 开发"
          />
        </a>
      </Typography.Text>
      <CodePreview>yarn create umi</CodePreview>
      <CodePreview>npm install</CodePreview>
      <CodePreview>npm start</CodePreview>
    </Card>
  </PageHeaderWrapper>
);
