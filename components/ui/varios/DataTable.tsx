'use client';
import React, { useState } from 'react';
import style from 'styles/projects/_data_table.module.scss';
const data = [
    { id: 1, name: 'React', year: 2013, description: 'A JavaScript library for building user interfaces' },
    { id: 2, name: 'Angular', year: 2010, description: 'A platform for building web applications' },
    { id: 3, name: 'Vue', year: 2014, description: 'A progressive framework for building user interfaces' },
    { id: 4, name: 'Ember', year: 2011, description: 'A framework for building ambitious applications' },
    { id: 5, name: 'Backbone', year: 2010, description: 'Gives structure to web applications' },
    { id: 6, name: 'Svelte', year: 2016, description: 'A radical new approach to building user interfaces' },
    { id: 7, name: 'Meteor', year: 2012, description: 'An open-source platform for web, mobile, and desktop' },
    { id: 8, name: 'Aurelia', year: 2014, description: 'A JavaScript client framework for mobile, desktop and web' },
    { id: 9, name: 'Mithril', year: 2013, description: 'Building Single Page Applications' },
    { id: 10, name: 'Polymer', year: 2013, description: 'Create custom reusable HTML elements' },
    { id: 11, name: 'Preact', year: 2015, description: 'A fast 3kB alternative to React with the same modern API' },
    { id: 12, name: 'Blazor', year: 2018, description: 'A framework for building interactive client-side web UI with .NET' },
    { id: 13, name: 'Alpine', year: 2020, description: 'A rugged, minimal framework' },
    { id: 14, name: 'Svelte', year: 2016, description: 'A radical new approach to building user interfaces' },
    { id: 15, name: 'Meteor', year: 2012, description: 'An open-source platform for web, mobile, and desktop' },
];


interface Props {
    data: any;
}
interface Sort {
    column: string,
    direction: string;
}
const Table = () => {
    const [languages, setLanguages] = useState(data);
    const [direction, setDirection] = useState(true);

    const handleSort = () => {
        const condition = direction ? 'asc' : 'desc';
        const sortedData = [...languages].sort((a, b) => {
            if (condition === 'asc') {
                return a.id - b.id;
            }
            return b.id - a.id;
        });
        setLanguages(sortedData);
        setDirection(!direction);
    };

    return (
        <table aria-describedby="info" className={style.table}>
            <caption lang='en' className={style.table__caption}>Top Js Frameworks</caption>
            <thead>
                <tr>
                    <th id="id" onClick={handleSort}
                        style={{ cursor: 'pointer' }}>ID {direction ? '▼' : '▲'}</th>
                    <th id="name" >Name </th>
                    <th id="year" >Year </th>
                    <th id="description">Description</th>
                </tr>
            </thead>
            <tbody>
                {languages.map((item) => (
                    <tr key={item.id}>
                        <td headers='id'>{item.id}</td>
                        <td headers='name'>{item.name}</td>
                        <td headers='year'>{item.year}</td>
                        <td className={style.table__description} headers='description'>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

