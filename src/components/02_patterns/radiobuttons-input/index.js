import React from 'react'
import styled, { css } from 'styled-components'

import Paragraph from '../../01_arrangements/paragraph'

const Radiobuttons = (props) => {
  const handleChange = (value) => {
    if (props.change) {
      props.change(value)
    }
  }

  return (
    <El
      {...props}
      data-testid="123abc"
      className={`radiobuttons ${props.classes}`}
      onChange={(event) => handleChange(event)}
    >
      {props.options.map((radio, index) => {
        return (
          <div className="wrapper" key={`_${radio.label}`}>
            <input
              type="radio"
              id={`_${radio.label}`}
              name={props.name}
              value={radio.value}
              defaultChecked={index === 0 ? 'selected' : false}
              disabled={props.disabled}
            />
            <label htmlFor={`_${radio.label}`}>{radio.label}</label>
          </div>
        )
      })}

      {(() => {
        if (props.fieldMessage) {
          return <Paragraph level="3">{props.fieldMessage}</Paragraph>
        }
      })()}
    </El>
  )
}

const El = styled.div`
  min-height: var(--sizing-full);
  padding-bottom: var(--sizing-half);

  .wrapper {
    padding-left: calc(var(--sizing-half) + var(--spacing-half));
    position: relative;

    label {
      display: block;
      font-family: var(--regular-font);
      font-size: var(--text-size-8);
      line-height: normal;
      cursor: pointer;
      max-width: 75ch; //Max 75 characters for optimum readability

      ${(props) =>
        props.required &&
        css`
          :after {
            display: inline-block;
            padding: var(--spacing-quarter);
            content: '*';
            font-family: var(--regular-font);
            font-size: 20px;
            color: var(--status--information);
          }
        `}
    }

    input {
      display: block;
      width: var(--sizing-half);
      height: var(--sizing-half);
      border: 1px solid var(--border-color-1);
      border-radius: var(--radius-half);
      line-height: var(--sizing-full);
      padding: 0 var(--spacing-full);
      position: absolute;
      /* top: calc(var(--spacing-quarter) - var(--spacing-eighth)); */
      top: 0;
      left: 0;

      &:hover {
        border-color: var(---border-color-2);
      }

      &:focus {
        border-color: var(---border-color-2);
        border-color: var(---border-color-2);
      }
    }
  }

  ${(props) =>
    props.variant == 'button' &&
    css`
      .wrapper {
        display: inline-block;
        margin-right: var(--spacing-full);
        padding: 0;

        label {
          padding: var(--spacing-full) var(--spacing-double);
          border: 1px solid var(--border-color-1);
          box-shadow: 0 5px 12px 0 rgb(0 0 0 / 9%);

          &:hover {
            border: 1px solid var(--border-color-2);
          }
        }
        input {
          opacity: 0;
          position: absolute;
          position: -99999px;
          z-index: -1;
          pointer-events: none;
        }

        input:checked + label {
          background: var(--border-color-2);
          color: var(--text-color-light);
        }
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      label {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
      }
      input {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
      }
    `}

	.paragraph {
    padding: var(--spacing-half) 0 0 0;
    color: var(--status--information);
  }

  ${(props) =>
    props.valid &&
    css`
      .paragraph {
        color: var(--status--success);
      }

      .wrapper label:after {
        color: var(--status--success);
      }
    `}

  ${(props) =>
    props.warning &&
    css`
      .paragraph {
        color: var(--status--warning);
      }

      .wrapper label:after {
        color: var(--status--warning);
      }
    `}

	${(props) =>
    props.invalid &&
    css`
      .paragraph {
        color: var(--status--error);
      }

      .wrapper label:after {
        color: var(--status--error);
      }
    `}
`

export default Radiobuttons
