import { Dropdown as AntdDropdown } from 'antd'
import type { DropdownProps as AntdDropdownProps } from 'antd'

type DropProps = NonNullable<AntdDropdownProps['menu']>
export type DropdownItems = NonNullable<DropProps['items']>
type dropdownprops = {
  children: react.reactnode;
  items: dropdownitems;
}

export function Dropdown({ items, children }: DropdownProps) {
  return (
    <AntdDropdown
      placement="bottomRight"
      menu={{ items }}
      trigger={['click']}
      arrow
    >
      {children}
    </AntdDropdown>
  );
}
