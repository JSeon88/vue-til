// 게시판 조작과 관련된 CRUD API
import { posts } from './index';

function fetchPosts() {
	return posts.get('/');
}

function createPosts(postData) {
	return posts.post('/', postData);
}

export { fetchPosts, createPosts };
