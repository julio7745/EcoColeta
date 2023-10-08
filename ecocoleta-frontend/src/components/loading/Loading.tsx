
import React from 'react';

import '../../styles/loading/loading.css';

interface LoadingProps{
    classNameOfLoading: string,
}

function Loading(props: LoadingProps) {

    return(
        <div className={props.classNameOfLoading}>
            <p>Loading ...</p>
        </div>
    )
}

export default Loading;
