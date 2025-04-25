import { memo } from "react";
import styled from "styled-components";

interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange: () => void;
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #fff;
  background-image: ${(props) =>
    props.checked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5l10 -10'/%3E%3C/svg%3E")`
      : "none"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease-in-out;
`;

const CheckboxContainer = styled.label`
  display: flex;
  column-gap: 8px;
  align-items: center;
  cursor: pointer;
  color: #808080;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #000;

    ${StyledCheckbox} {
      border-color: #000;
    }
  }
`;

export const Checkbox = memo(function Checkbox({
  text,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      <span>{text}</span>
    </CheckboxContainer>
  );
});
