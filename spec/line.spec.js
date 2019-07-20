import test from "ava";
import { anylf2crlf, lf2crlf, crlf2lf } from "../src/line";

/** Well, it has a type of line ending in it but that doesn't count */
const no = "This st\ring doesn't have a line ending in it";
const lf = "This li\ne has a li\neb\reak i\n it";
const crlf = "Lea\r\ning these line endings really helped me debug co\r\ner cases";
const both = "Those da\r\n li\ne endings. \really annoying to lea\r\n";

test("does nothing", t => {
   t.is(lf2crlf(no), no);
   t.is(crlf2lf(no), no);
   t.is(anylf2crlf(no), no);

   t.is(crlf2lf(lf), lf);
   t.is(lf2crlf(crlf), crlf);
});

test("lf2crlf", t => {
   const lfres = "This li\r\ne has a li\r\neb\reak i\r\n it";
   t.is(lf2crlf(lf), lfres);
   t.is(lf2crlf(both), "Those da\r\n li\r\ne endings. \really annoying to lea\r\n");
   t.is(anylf2crlf(lf), lfres);
});

test("crlf2lf", t => {
   t.is(crlf2lf(crlf), "Lea\ning these line endings really helped me debug co\ner cases");
   t.is(crlf2lf(both), "Those da\n li\ne endings. \really annoying to lea\n");
});
