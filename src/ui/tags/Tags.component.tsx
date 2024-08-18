import React, { useEffect, useRef, useState } from 'react';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Flex, Input, Tag, theme, Tooltip, Typography } from 'antd';
const { Text } = Typography;

const tagInputStyle: React.CSSProperties = {
  height: 32,
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  color: 'rgba(0, 0, 0, .45)',
  fontSize: '14px',
  padding: '0 16px',
  borderRadius: '32px',
  backgroundColor: 'inherit',
  marginInlineEnd: 8,
  verticalAlign: 'top',
};

export const Tags: React.FC = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>(['Figma', 'FigJam', 'Английский B1', 'Illustrator',
  'Photoshop', 'UX-исследования', 'Прототипирование', 'Адаптивный дизайн', 'Гайдлайны iOS/Android']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const tagPlusStyle: React.CSSProperties = {
    width: 122,
    height: 32,
    display: 'flex',
    padding: '0 16px',
    alignItems: 'center',
    background: token.colorBgContainer,
    borderRadius: '32px',
    cursor: 'pointer',
  };

  return (
    <Flex gap="8px" wrap>
      {tags.map<React.ReactNode>((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              type='secondary'
              ref={editInputRef}
              key={tag}
              style={tagInputStyle}
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={tag}
            style={tagInputStyle}
            closeIcon={<CloseCircleOutlined />}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          style={{ width: '122px',padding: '0 16px', borderRadius: '32px', }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} onClick={showInput}>
          <Text type='secondary' style={{
            fontFamily: 'Inter',           
          }} >Добавить</Text>
          <EditOutlined style={{
            color: 'rgba(0, 0, 0, .45)'
          }} />
        </Tag>
      )}
    </Flex>
  );
};
