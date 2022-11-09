import { body } from 'express-validator'

export const loginValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'The password must contain at least 5 characters').isLength({
    min: 5,
  }),
]

export const registerValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'The password must contain at least 5 characters').isLength({
    min: 5,
  }),
  body('fullName', 'Enter the correct name').isLength({ min: 3 }),
  body('avatarUrl', 'Incorrect link to the avatar').optional(),
]

export const postCreateValidation = [
  body('title', 'Enter the title of the article')
    .isLength({ min: 3 })
    .isString(),
  body('text', 'Enter the text of the article')
    .isLength({
      min: 5,
    })
    .isString(),
  body('tags', 'Invalid tag format').optional().isString(),
  body('imageUrl', 'Invalid image link').optional().isString(),
]
