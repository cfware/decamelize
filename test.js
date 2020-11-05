import t from 'libtap';

import decamelize from '@cfware/decamelize';

t.type(decamelize, 'function');

// These tests were adapted from github.com/sindresorhus/decamelize
t.equal(decamelize(''), '');
t.equal(decamelize('unicornsAndRainbows'), 'unicorns-and-rainbows');
t.equal(decamelize('UNICORNS AND RAINBOWS'), 'unicorns and rainbows');
t.equal(decamelize('unicorns-and-rainbows'), 'unicorns-and-rainbows');
t.equal(decamelize('thisIsATest'), 'this-is-a-test');
t.equal(decamelize('thisHasSpecialCharactersLikeČandŠ'), 'this-has-special-characters-like-čand-š');

t.equal(decamelize('myURLString'), 'my-url-string');
t.equal(decamelize('URLString'), 'url-string');
t.equal(decamelize('StringURL'), 'string-url');
t.equal(decamelize('testGUILabel'), 'test-gui-label');
t.equal(decamelize('CAPLOCKED1'), 'caplocked1');
