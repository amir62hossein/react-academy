import React from 'react'
import { css } from "@emotion/react";
import { BeatLoader } from 'react-spinners';

const Spinner = () => {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
        <div className='mx-auto text-center'>
            <BeatLoader loading css={override} size={72} />
        </div>
    )
}

export default Spinner