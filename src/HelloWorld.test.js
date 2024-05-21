// HelloWorld.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders the key, value, and index for each entry in the object', () => {
    render(<HelloWorld />);

    expect(screen.getByText('Key: name')).toBeInTheDocument();
    expect(screen.getByText('Key: age')).toBeInTheDocument();
    expect(screen.getByText('Key: city')).toBeInTheDocument();

    expect(screen.getByText('Value: Alice')).toBeInTheDocument();
    expect(screen.getByText('Value: 30')).toBeInTheDocument();
    expect(screen.getByText('Value: New York')).toBeInTheDocument();

    expect(screen.getByText('Index: 0')).toBeInTheDocument();
    expect(screen.getByText('Index: 1')).toBeInTheDocument();
    expect(screen.getByText('Index: 2')).toBeInTheDocument();
});
