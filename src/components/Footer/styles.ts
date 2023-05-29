import styled from 'styled-components'
import { color } from '../../styles'
import { HashLink } from 'react-router-hash-link'
export const Container = styled.footer`
  background-color: ${color.gray};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  color: ${color.white};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${color.gray2};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`