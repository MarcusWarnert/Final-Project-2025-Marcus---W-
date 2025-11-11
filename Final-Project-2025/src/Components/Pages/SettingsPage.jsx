import React from 'react';

export default function SettingsPage() {

    return (
        <main>
            <h1 id="SettingsHeader">
                Settings
            </h1>
            <div>
                <table id="AdjustableSettings">
                    <thead>
                        <tr>
                            <th>Adjustable Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dark Mode-------Light Mode</td>
                        </tr>
                        <tr>
                            <td>FOV</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </main>
    )
}