import React from 'react';
import { CameraOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Flex, message, Upload } from 'antd';
import styled from '@emotion/styled';

const StyledUploadBlock = styled(Upload)`
  
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-upload-wrapper {
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

 export const UploadAvatar: React.FC = () => (
  <StyledUploadBlock {...props} >
    <Button type="link" icon={<CameraOutlined />} style={{ fontFamily: 'Inter' }} block>Изменить</Button>
  </StyledUploadBlock>
);