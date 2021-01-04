import React from 'react';
import {
  Button,
  ButtonElement,
  IndexPath,
  OverflowMenu,
  OverflowMenuElement,
  OverflowMenuProps,
} from '@ui-kitten/components';

export const OverflowMenuShowcase = (
  props: OverflowMenuProps
): OverflowMenuElement => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(null);

  const toggleMenu = (): void => {
    setVisible(!visible);
  };

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index);
    toggleMenu();
  };

  const renderButton = (): ButtonElement => (
    <Button onPress={toggleMenu}>TOGGLE MENU</Button>
  );

  return (
    <OverflowMenu
      {...props}
      visible={visible}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      onBackdropPress={toggleMenu}
      anchor={renderButton}
    >
      {props.children}
    </OverflowMenu>
  );
};
