import React from 'react'
import styled, { css } from 'styled-components'

const Stack = (props) => {
  return (
    <El {...props} data-testid="123abc" className={`stack ${props.classes}`}>
      {props.children}
    </El>
  )
}

const El = styled.div`
  padding-bottom: var(--spacing-full);

  ${(props) =>
    props.depth === '2' &&
    css`
      padding-bottom: var(--spacing-double);
    `}

  ${(props) =>
    props.depth === '3' &&
    css`
      padding-bottom: var(--spacing-triple);
    `}

        ${(props) =>
    props.depth === '4' &&
    css`
      padding-bottom: var(--spacing-quadruple);
    `}

        ${(props) =>
    props.depth === '5' &&
    css`
      padding-bottom: var(--spacing-quintuple);
    `}
`

export default Stack
