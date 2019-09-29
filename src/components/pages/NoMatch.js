import React from 'react';

export const NoMatch = ({ location }) => (
    <div>
        <h2>No Match found for <code>{location.pathname}</code></h2>
    </div>
)
