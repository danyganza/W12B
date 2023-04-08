// Get the button element
let button = document.querySelector('#button');

// Add an event listener to create a new post
button.addEventListener('click', function() {
  let url = 'https://jsonplaceholder.typicode.com/posts';

  let data = {
    title: 'My new post',
    body: ' my new post is cool.',
    userId: 1
  };

  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  function success(data) {
    console.log('New post created:', data);
    // Show success message to user
  }

  function failure(error) {
    console.error(error);
    // Show error message to user
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error creating post');
      }
    })
    .then(success)
    .catch(failure);
});

// Add an event listener to update a post
button.addEventListener('click', function() {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';

  let data = {
    title: 'Updated post',
    body: 'This post has been updated.',
    userId: 1
  };

  let options = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  function success(data) {
    console.log('Post updated:', data);
    // Show success message to user
  }

  function failure(error) {
    console.error(error);
    // Show error message to user
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error updating post');
      }
    })
    .then(success)
    .catch(failure);
});

// Add an event listener to delete a post
button.addEventListener('click', function() {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';

  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  function success(data) {
    console.log('Post deleted:', data);
    // Show success message to user
  }

  function failure(error) {
    console.error(error);
    // Show error message to user
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error deleting post');
      }
    })
    .then(success)
    .catch(failure);
});
