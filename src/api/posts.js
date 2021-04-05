// 게시판 조작과 관련된 CRUD API
import { posts } from './index';

function fetchPosts() {
	return posts.get('/');
}

function createPosts(postData) {
	return posts.post('/', postData);
}

function deletePost(id) {
	return posts.delete(id);
}

function fetchPost(id) {
	return posts.get(id);
}

function editPost(id, postData) {
	return posts.put(id, postData);
}

export { fetchPosts, createPosts, deletePost, fetchPost, editPost };
