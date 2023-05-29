import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? color.green : color.white)};
  color: ${color.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? color.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${color.white};
  color: ${color.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
