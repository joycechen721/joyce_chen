// markdown to html
async function renderMd(slug: string) {
  try {
    const response = await fetch(`/api/renderMd`, {
      method: "POST", headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ slug })
    });

    if (!response.ok) {
      throw new Error('Failed to convert markdown.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error converting markdown:', error);
  }
}

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

// lists all the children of a block
async function listBlockChildren(block_id: string) {
  try {
    const response = await fetch('/api/listBlockChildren', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ block_id })
    })

    if (!response.ok) {
      throw new Error(`Failed to load children of block ${block_id}`)
    }

    const data = await response.json();
    console.log('Children blocks loaded successfully: ', data);
    return data

  } catch (error) {
    console.error('Error loading children blocks: ', error);
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
    return data.response.results;

  } catch (error) {
    console.error('Error loading posts:', error);
  }
}

export { renderMd, addPostToNotion, listPagesFromNotion }