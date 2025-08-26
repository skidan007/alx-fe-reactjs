import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders the component with initial todos', () => {
    render(<TodoList />);

    // Check for the main heading
    expect(screen.getByText('Todo List 📝')).toBeInTheDocument();

    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByText('Ship It!')).toBeInTheDocument();

    // Check that 'Write Tests' is completed (has line-through style)
    const completedTodo = screen.getByText('Write Tests');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });

  // Test 2: Adding a new todo
  test('allows users to add a new todo item', () => {
    render(<TodoList />);

    // Find the input field and the add button
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    // Simulate user typing a new todo
    fireEvent.change(inputElement, { target: { value: 'Test new todo' } });
    
    // Simulate clicking the add button
    fireEvent.click(addButton);

    // Assert that the new todo is now in the document
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
    
    // Assert that the input field is cleared after adding
    expect(inputElement.value).toBe('');
  });

  // Test 3: Toggling a todo's completion status
  test('allows users to toggle a todo item', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');
    
    // Initially, it should not have the line-through style
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Simulate clicking the todo to mark it as complete
    fireEvent.click(todoItem);

    // Assert that it now has the line-through style
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Simulate clicking it again to mark it as incomplete
    fireEvent.click(todoItem);

    // Assert that the style is removed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting a todo
  test('allows users to delete a todo item', () => {
    render(<TodoList />);

    const todoTextToDelete = 'Ship It!';
    
    // Ensure the todo to be deleted is initially present
    const todoItem = screen.getByText(todoTextToDelete);
    expect(todoItem).toBeInTheDocument();

    // Find the delete button associated with this todo
    // The button is a sibling within the parent <li>
    const deleteButton = todoItem.nextSibling;
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Assert that the todo item is no longer in the document
    // We use queryByText because it returns null if not found, instead of throwing an error
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});