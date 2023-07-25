// adds a new page to the blog database on my Notion
async function addPostToNotion(text: string) {
  try {
    const response = await fetch('/api/writePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to add post to Notion.');
    }

    const data = await response.json();
    console.log('Item added successfully:', data);
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

// lists all pages on the blog database
async function listPagesFromNotion() {
  try {
    const response = await fetch('/api/listPosts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to load posts to Notion.');
    }

    const data = await response.json();
    console.log('Posts loaded successfully:', data);
  } catch (error) {
    console.error('Error loading posts:', error);
  }
}

export {addPostToNotion, listPagesFromNotion}