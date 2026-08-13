import express from 'express';

const router = express.Router();

/**
 * GET /api/categories
 * Get all categories
 */
router.get('/', (req, res) => {
  res.json({ 
    message: 'Fetch all categories',
    categories: [] 
  });
});

/**
 * POST /api/categories
 * Create a new category
 */
router.post('/', (req, res) => {
  res.json({ 
    message: 'Category created',
    category: req.body 
  });
});

/**
 * PUT /api/categories/:id
 * Update a category
 */
router.put('/:id', (req, res) => {
  res.json({ 
    message: 'Category updated',
    id: req.params.id 
  });
});

/**
 * DELETE /api/categories/:id
 * Delete a category
 */
router.delete('/:id', (req, res) => {
  res.json({ 
    message: 'Category deleted',
    id: req.params.id 
  });
});

/**
 * POST /api/categories/:id/rules
 * Add categorization rules
 */
router.post('/:id/rules', (req, res) => {
  res.json({ 
    message: 'Rule added to category',
    categoryId: req.params.id,
    rule: req.body 
  });
});

/**
 * GET /api/categories/:id/emails
 * Get emails in a category
 */
router.get('/:id/emails', (req, res) => {
  res.json({ 
    message: 'Fetch emails in category',
    categoryId: req.params.id,
    emails: [] 
  });
});

export default router;
