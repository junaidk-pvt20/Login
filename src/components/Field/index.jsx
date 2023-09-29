import React, { memo } from 'react'
import { Controller } from 'react-hook-form'
import Error from '../Error'
import Label from '../Label'

const Index = (props) => {
    return (
        <div className={props?.className}>
            <Label 
                className={props?.label?.className}
                label={props?.label?.label}
                isRequiredSign={props?.label?.isRequiredSign}
            />
            <Controller 
                name={props?.controller?.name}
                control={props?.controller?.control}
                render={props?.controller?.render}
                // {...props?.controller}
            />
            {!props?.error?.isHidden && 
                <Error 
                    errorMessage={props?.error?.errorMessage}
                    className={props?.error?.className}
                />
            }
        </div>
    )
}

export default memo(Index)