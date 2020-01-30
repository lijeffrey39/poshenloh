import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import {PostJumbotron} from './../components/PostJumbotron';
import {Footer} from './../components/Footer';

const Styles = styled.div`
    font-family: 'Montserrat', sans-serif;
    .row {
        margin-left: 0px;
        margin-right: 0px;
        font-family: 'Montserrat', sans-serif;
    }

    .col {
        text-align: center;
    }
`;

const PStyled = styled.p`
    font-size: 18px !important;
    margin-bottom: 30px;
    line-height: 1.4;
`;

const ULStyled = styled.ul`
    font-size: 21px !important;
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
`;


export const Quadratic = () => {
    return (
        <Styles>
            <PostJumbotron 
                date = 'October 13, 2019'
                title = 'A Simple Proof of the Quadratic Formula'
                subTitle = 'An easy way to solve quadratic equations'>
            </PostJumbotron>
            <Container style = {{paddingTop: 70, paddingBottom: 100, paddingLeft: '10%', paddingRight: '5%'}}>
                <PStyled>
                    In October 2019, I discovered a very simple proof of the quadratic formula.  The
                    formal article is <a href="https://arxiv.org/abs/1910.06709">publicly
                    shared</a> on the <a href="https://arxiv.org">arXiv math article
                    preprint server</a> (<a href="https://arxiv.org/pdf/1910.06709.pdf">direct link to PDF</a>).
                    This webpage provides the general public with an easier-to-digest summary
                    of the situation, together with some interesting links to some of the
                    historical sources. A video explanation is being produced, and the YouTube
                    link will be placed here shortly.
                </PStyled>
<h2>Explanation of Loh's Quadratic Method, by Example</h2>
                <PStyled>
This section is written in a way that a teacher can use to comprehensively
explain how to solve any quadratic equation with the method in the above paper.
  It <strong>does not require</strong> the Fundamental Theorem of Algebra as a
prerequisite.
Let's start by reviewing the facts that are usually taught to introduce
quadratic equations. 
                </PStyled>
<h3>Review: multiplying and unmultiplying</h3>
                <PStyled>
First, let's remember how to multiply with the distributive rule
(sometimes called <a href="https://www.expii.com/t/using-foil-to-multiply-binomials-4491">FOIL</a>):

{`
\\begin{align*}
  &\\quad (x - 3)(x - 4) \\\\
  &= x^2 - 4x - 3x + 12 \\\\
  &= x^2 - 7x + 12.
\\end{align*}
`}
                </PStyled>
                <PStyled>
The key takeaway is that the $-7$ in the $-7x$ comes from adding together
$-3$ and $-4$, and the $12$ comes from multiplying together $-3$ and $-4$.
Here's another example:
{`
\\begin{align*}
  &(u - 3)(u + 3) \\\\
  &= u^2 + 3u - 3u + 9 \\\\
  &= u^2 - 9.
\\end{align*}
`}
                </PStyled>
                <PStyled>
That was nice: since we had both $-3$ and $+3$, the $+3u$ and $-3u$ terms
canceled out, giving something often called a difference of squares.
That will be useful later.
                </PStyled>
                <PStyled>
The reason we care about this is because if we can do this in reverse, we can
solve quadratic equations. For example, suppose we want to find all $x$ such
that

\[x^2 - 7x + 12 = 0.\]

We already know that this is the same as

\[(x-3)(x-4) = 0.\]

The only way for two numbers to multiply to zero is if one (or both) are zero.
So, the $x$ that work are precisely those where $x-3 = 0$ (which is $x = 3$), or
$x-4 = 0$ (which is $x = 4$). Note that the solutions are the things we subtract
from $x$, i.e., not $-3$ and $-4$, but $3$ and $4$.
                </PStyled>
<h3>Review: setting up for factoring</h3>
                <PStyled>
Let's try the reverse process for the example

\[ x^2 + 2x - 24 = 0. \]

We'd like to factorize it into something like

\[(x - \quad)(x - \quad).\]

Students haven't yet learned that it's always possible to find such a
factorization, but our approach will also prove to them that it is always
possible!  By the previous section, if we managed to factorize, then whatever
ends up in those blank spaces will be the solutions. But what should go into
those blank spaces? Two numbers which have sum $2$ and product $-24$. Usually,
  people try to find these numbers by guess and check.  That can be frustrating,
  especially when there are negative numbers to try, and when the product has
lots of possible factorizations ($24$ has a ton of possibilities).
                </PStyled>
<h3>Insight: factoring without guessing</h3>
                <PStyled>
Here's a way to pinpoint the numbers without any guessing at all! If the sum of
two numbers is $2$, then their average is $1$. So, whatever the numbers are,
they are $1$ plus some amount, and $1$ minus the same amount. All we need to do
is to find a $z$ such that $1+z$ and $1-z$ work as the two numbers, and $z$ is
allowed to be $0$.
                </PStyled>
                <PStyled>
By making the two numbers $1+z$ and $1-z$, they automatically sum to $2$. So,
we just need them to multiply to $-24$. How can we find $z$ which satisfy this?

\[(1+z)(1-z) = -24.\]

We already saw a pattern like this, where we have a sum of two numbers,
multiplied by their difference. The answer is always the difference of their
squares! So, we are looking for $z$ such that

\[
1 - z^2 = -24.
\]

This is exciting! There is a lone $z^2$, and everything else is just a
number! That means that we can just finish solving for $z$ by following our
nose, instead of requiring any new methods:

{`
\\begin{align*}
z^2 &= 25 \\\\
z &= \\pm 5.
\\end{align*}
`}

The two numbers we were looking for were $1$ plus or minus $z$. It then makes
sense that $z$ has two options which are just negatives of each other, because
both give the same result: $1+5 = 6$ and $1-5 = -4$. And indeed, the sum of $6$
and $-4$ is $2$, and their product is $-24$. The fact that those numbers satisfy
the sum and product relations means that the factorization exists, and so we
have found the solutions: $x = 6$ and $x = -4$.
                </PStyled>
<h3>Example of use: a quadratic that can't be factored nicely</h3>
                <PStyled>
Now that guessing has been eliminated, we can actually solve any quadratic with
this method. Consider this example:

{`
\\[\\frac{x^2}{2} - x + 2 = 0.\\]
`}

First, let's clean it up by multiplying both sides by $2$:

\[x^2 - 4x + 6 = 0.\]

Just like before, if we can find two numbers with sum $4$ and product $6$, then
the factorization $(x - \quad)(x - \quad)$ will exist, and those two numbers
will be the solutions. Their average must be half of their sum, and so we'd like
to find some $z$ so that the numbers are $2+z$ and $2-z$. The product is
supposed to be $6$, so

{`
\\begin{align*}
4 - z^2 &= 6 \\\\
z^2 &= -2 \\\\
z &= \\pm i \\sqrt{2}
\\end{align*}
`}

This is the reason why complex numbers were invented: so that the square roots
of negative numbers always exist. (This is also why we do not need the
  Fundamental Theorem of Algebra, and in fact, why this approach proves that
  theorem for degree-2 polynomials.) So, there are indeed two numbers with sum
      $4$ and product $6$, and they are $2 + z$ and $2 - z$, which are $2 \pm i
      \sqrt{2}$.  The fact that those numbers satisfy the sum and product
      relations means that the factorization $(x - \quad)(x - \quad)$ exists,
      and so we have found the solutions: $x = 2 \pm i \sqrt{2}$. We're all
      done, and we didn't need to use any memorized formula at all!  <strong>This
      method works for every quadratic equation, without needing any
      memorization.</strong>
                </PStyled>
<h3>Postscript: proof of the quadratic formula</h3>
                <PStyled>
If you really want to derive a formula to memorize, you can use this method, and
it's very natural, but the previous section shows that it is actually
unnecessary to do so.
                </PStyled>
                <PStyled>
For a general quadratic equation $x^2 + Bx + C = 0$, the solutions are
two numbers with sum $-B$ and product $C$. So, we're looking for some $z$ so
that the two numbers can be {'$-\\frac{B}{2} + z$'} and {'$-\\frac{B}{2} - z$'}. Their
product is supposed to be $C$, so we need:

{`
\\begin{align*}
\\frac{B^2}{4} - z^2 &= C \\\\
z^2 &= \\frac{B^2}{4} -C \\\\
z &= \\pm \\sqrt{\\frac{B^2}{4} - C}.
\\end{align*}
`}

The solutions are then {'$-\\frac{B}{2} \\pm \\sqrt{\\frac{B^2}{4} - C}$'}.
  </PStyled>
  <PStyled>
  The above formula is already enough to solve any quadratic equation, because
you can multiply or divide both sides by a number so that nothing is in front of
the $x^2$. However, just to see that this formula is the same as what everyone
is used to memorizing (which is no longer necessary, in light of our method), we
can show how to get the formula for the most general quadratic equation $Ax^2 +
  Bx + C = 0$. We just need to divide by $A$ first, to get

{`
\\[
x^2 + \\left(\\frac{B}{A}\\right) x + \\frac{C}{A} = 0.
\\]
`}

Then, plugging in {'$\\frac{B}{A}$'} for $B$ and {'$\\frac{C}{A}$'} for $C$ in the
solutions above, we get that the solutions are:

{`
\\begin{align*}
& -\\frac{B}{2A} \\pm \\sqrt{\\frac{B^2}{4A^2} - \\frac{C}{A}} \\\\
& = -\\frac{B}{2A} \\pm \\sqrt{\\frac{B^2 - 4AC}{4A^2}} \\\\
& = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}.
\\end{align*}
`}
                </PStyled>

<h2>Interesting historical links</h2>
                <ULStyled>
  <li><a
href="https://www.wilbourhall.org/pdfs/The_Algebra_of_Mohammed_Ben_Musa2.pdf">
  al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala
  </a>, by al-Khwarizmi (circa 825)</li>

  <li><a
href="https://archive.org/details/Brahmasphutasiddhanta_Vol_1/page/n3">
  Brahma-Sphuta Siddhanta</a>, by Brahmagupta (circa 628)</li>

  <li><a
href="https://archive.org/details/diophantusofalex00heatiala/page/n6">
  Arithmetica</a>, by Diophantus (circa 250)</li>

  <li><a href="https://gallica.bnf.fr/ark:/12148/bpt6k107597d.pdf">Opera
Mathematica</a>, by Vi&egrave;te (1579)</li>

</ULStyled>
            </Container>
            <Footer></Footer>
        </Styles>
    );
}
