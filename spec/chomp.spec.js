import test from "ava";
import { chomp, chompLF, chompCRLF } from "../src/chomp";

test("removes LF", t => {
   t.is(chomp("foo\n"), "foo");
   t.is(chompLF("bar\n"), "bar");
   t.not(chompCRLF("baz\n"), "baz");
});

test("removes CRLF", t => {
   t.is(chomp("baz\r\n"), "baz");
   t.is(chompLF("foo\r\n"), "foo\r");
   t.is(chompCRLF("bar\r\n"), "bar");
});

test("does nothing", t => {
   t.is(chomp("hello"), "hello");
   t.is(chompLF("world"), "world");
   t.is(chompCRLF("idk something else"), "idk something else");
});
