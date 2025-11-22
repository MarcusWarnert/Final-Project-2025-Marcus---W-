import React from 'react';

export default function Title() {
    return(
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h1 style={{ 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'}}>
                    StreamLater
                </h1>
                <h4 style={{marginBottom: '1.5rem'}}>Add Now, Stream Later</h4>
            </div>
        </main>
    )
}