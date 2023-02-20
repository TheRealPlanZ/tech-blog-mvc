const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');