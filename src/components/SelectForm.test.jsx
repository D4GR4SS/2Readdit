import { afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import SelectForm from './SelectForm';

const mockData = ['A', 'B', 'C', 'D'];

describe('SelectForm', () => {
  afterEach(cleanup);

  it('renders a form with a label', () => {
    render(<SelectForm formData={mockData} />);

    expect(screen.getByText('Select by topic:')).toBeDefined();
  });

  it('fires an event handler when the button is clicked', () => {
    const eventHandler = vi.fn();
    render(<SelectForm onSelect={eventHandler} formData={mockData} />);

    fireEvent.click(screen.getByText('Get New Posts'));
    expect(eventHandler).toHaveBeenCalledOnce();
  });

  it('renders all options from the provided data', () => {
    render(<SelectForm formData={mockData} />);

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(mockData.length);

    options.forEach((option, index) => {
      expect(option.textContent).toBe(mockData[index]);
    });
  });
});
