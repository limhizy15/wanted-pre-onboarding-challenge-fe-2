/**
 * Todo 아이템 모델
 * @constructor
 * @param {number} id - 고유 숫자
 * @param {string} content - 할 일을 자세히 정의합니다.
 * @param {boolean} isCompleted - 완료 시 true
 * @param {string[]} [categories]
 * @param {string[]} [tags]
 */
function Todo(id, content, isCompleted, categories, tags) {}

/**
 * 할 일을 추가합니다.
 *
 * @param {string} content - (필수값)
 */
function AddTodo(content) {}

/**
 * 모든 할 일을 조회합니다.
 * id가 없다면 전체를, id가 있다면 특정 할 일을
 *
 * @param {number} [id]
 */
function getTodoList(id) {}

/**
 * 할 일을 수정합니다.
 *
 * @param {number} id
 * @param {Object} updatedTodo
 * @param {string} [updatedTodo.content]
 * @param {boolean} [updatedTodo.isCompleted]
 * @param {string[]} [updatedTodo.categories]
 * @param {string[]} [updatedTodo.tags]
 */
function updateToto(id, updatedTodo) {}

/**
 * 할 일을 삭제합니다.
 *
 * @param {number} id
 */
function deleteTodo(id) {}

/**
 * 모든 할 일을 삭제합니다.
 */
function deleteAllTodos() {}

/**
 * 할 일의 특정 태그를 삭제합니다.
 *
 * @param {number} id
 * @param {string} tagName
 */
function deleteTag(id, tagName) {}

/**
 * 할 일의 모든 태그를 삭제합니다.
 *
 * @param {number} id
 */
function deleteAllTags(id) {}
