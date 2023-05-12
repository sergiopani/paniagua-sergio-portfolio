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
    { id: 9, name: 'Mithril', year: 2013, description: 'A modern client-side JavaScript framework for building Single Page Applications' },
    { id: 10, name: 'Polymer', year: 2013, description: 'A JavaScript library that helps you create custom reusable HTML elements' },
    { id: 11, name: 'Preact', year: 2015, description: 'A fast 3kB alternative to React with the same modern API' },
    { id: 12, name: 'Blazor', year: 2018, description: 'A framework for building interactive client-side web UI with .NET' },
    { id: 13, name: 'Alpine', year: 2020, description: 'A rugged, minimal framework for composing JavaScript behavior in your markup' },
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
    const [sort, setSort] = useState<Sort>({ column: 'id', direction: 'asc' });

    const sortedData = data.sort((a, b) => {
        const isAscending = sort.direction === 'asc' ? 1 : -1;
        // return isAscending * a[sort.column].localeCompare(b[sort.column]);
    });

    const handleSort = (column: any) => {
        const direction = sort.column === column && sort.direction === 'asc' ? 'desc' : 'asc';
        setSort({ column, direction });
    };

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th onClick={() => handleSort('id')}>ID {sort.column === 'id' && (sort.direction === 'asc' ? '▲' : '▼')}</th>
                    <th onClick={() => handleSort('name')}>Name {sort.column === 'name' && (sort.direction === 'asc' ? '▲' : '▼')}</th>
                    <th onClick={() => handleSort('year')}>Year {sort.column === 'year' && (sort.direction === 'asc' ? '▲' : '▼')}</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

