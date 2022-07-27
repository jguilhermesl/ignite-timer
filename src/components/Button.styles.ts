import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin-left: 1rem;
  border: 0;

  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => `background-color: ${buttonVariants[props.variant]};
    `} */
`
