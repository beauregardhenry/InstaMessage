import express from 'express';

const router = express.Router();

/**
 * GET /api/templates
 * Get all email templates
 */
router.get('/', (req, res) => {
  res.json({ 
    message: 'Fetch all templates',
    templates: [] 
  });
});

/**
 * POST /api/templates
 * Create a new email template
 */
router.post('/', (req, res) => {
  res.json({ 
    message: 'Template created',
    template: req.body 
  });
});

/**
 * GET /api/templates/:id
 * Get a specific template
 */
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Fetch template',
    id: req.params.id 
  });
});

/**
 * PUT /api/templates/:id
 * Update a template
 */
router.put('/:id', (req, res) => {
  res.json({ 
    message: 'Template updated',
    id: req.params.id 
  });
});

/**
 * DELETE /api/templates/:id
 * Delete a template
 */
router.delete('/:id', (req, res) => {
  res.json({ 
    message: 'Template deleted',
    id: req.params.id 
  });
});

/**
 * POST /api/templates/:id/send
 * Send email using a template
 */
router.post('/:id/send', (req, res) => {
  res.json({ 
    message: 'Email sent using template',
    templateId: req.params.id,
    recipient: req.body.recipient 
  });
});

export default router;
