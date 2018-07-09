import React, { Fragment } from 'react';

import { Overview, Detail } from 'movies/components';

export class App extends React.Component {
    render() {
        return (
            <div className="page page--split">
                <Overview />
                <Detail />
            </div>
        )
    }
}

export default App;