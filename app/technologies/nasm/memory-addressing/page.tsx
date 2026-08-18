import type { Metadata } from 'next'
import Link from 'next/link'

import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'

export const metadata: Metadata = {
  title:
    'NASM Memory Addressing & x86-64 Stack Guide | ProjectAssignments',
  description:
    'Learn NASM memory addressing and the x86-64 stack, including memory operands, addresses, offsets, base and index registers, LEA, arrays, RSP, RBP, PUSH, POP, CALL, RET, and stack frames.',
  keywords: [
    'NASM memory addressing',
    'x86-64 memory addressing',
    'NASM stack',
    'x86-64 stack',
    'NASM addressing modes',
    'NASM memory operands',
    'NASM LEA',
    'RSP RBP NASM',
    'NASM PUSH POP',
    'NASM CALL RET',
    'x86-64 stack frame',
    'assembly language memory addressing',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/technologies/nasm/memory-addressing',
  },
  openGraph: {
    title:
      'NASM Memory Addressing & x86-64 Stack Guide | ProjectAssignments',
    description:
      'A practical guide to NASM memory addressing, arrays, effective addresses, the x86-64 stack, procedures, and stack frames.',
    url:
      'https://projectassignments.com/technologies/nasm/memory-addressing',
    siteName: 'ProjectAssignments',
    type: 'article',
  },
}

const addressingTypes = [
  {
    title: 'Immediate values',
    syntax: 'mov rax, 42',
    description:
      'The instruction contains the actual value that should be used. No memory access is involved in this example.',
  },
  {
    title: 'Register operands',
    syntax: 'mov rax, rbx',
    description:
      'The instruction operates directly on values held in registers.',
  },
  {
    title: 'Memory operands',
    syntax: 'mov rax, [rbx]',
    description:
      'The register contains an address, and the square brackets tell NASM to access the memory located at that address.',
  },
  {
    title: 'Base + displacement',
    syntax: 'mov rax, [rbx + 8]',
    description:
      'An offset is added to a base address to access a different memory location.',
  },
  {
    title: 'Base + index',
    syntax: 'mov rax, [rbx + rcx]',
    description:
      'Two registers can contribute to the effective address, which is useful when traversing data structures.',
  },
  {
    title: 'Base + index × scale',
    syntax: 'mov rax, [rbx + rcx*8]',
    description:
      'A scaled index is particularly useful when accessing arrays of elements with a fixed element size.',
  },
]

const stackConcepts = [
  {
    title: 'RSP',
    description:
      'The stack pointer identifies the current stack position and changes as data is pushed onto or removed from the stack.',
  },
  {
    title: 'RBP',
    description:
      'RBP can provide a stable reference point within a stack frame and is commonly used when explaining local variables and procedure layouts.',
  },
  {
    title: 'PUSH',
    description:
      'PUSH places a value on the stack and updates the stack pointer accordingly.',
  },
  {
    title: 'POP',
    description:
      'POP retrieves a value from the stack and updates the stack pointer accordingly.',
  },
  {
    title: 'CALL',
    description:
      'CALL transfers execution to a procedure and works with the stack to preserve a return address.',
  },
  {
    title: 'RET',
    description:
      'RET returns execution to the saved return location associated with a procedure call.',
  },
]

const memorySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/technologies/nasm/memory-addressing#webpage',
      url:
        'https://projectassignments.com/technologies/nasm/memory-addressing',
      name:
        'NASM Memory Addressing & x86-64 Stack Guide | ProjectAssignments',
      description:
        'A practical guide to NASM memory addressing, arrays, effective addresses, the x86-64 stack, procedures, and stack frames.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/technologies/nasm/memory-addressing#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/technologies/nasm/memory-addressing#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://projectassignments.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Technologies',
          item: 'https://projectassignments.com/technologies',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'NASM',
          item: 'https://projectassignments.com/technologies/nasm',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Memory & Addressing',
          item:
            'https://projectassignments.com/technologies/nasm/memory-addressing',
        },
      ],
    },
  ],
}

export default function NASMMemoryAddressingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="NASM • MEMORY & STACK"
          title="NASM Memory Addressing and the x86-64 Stack: A Practical Guide."
          body="Understand how NASM programs locate data in memory, construct effective addresses, work with arrays and buffers, and use the x86-64 stack for temporary storage, procedure calls, local variables, and stack frames."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="THE CORE IDEA"
              title="Memory is not the same thing as a register."
              body="One of the most important concepts in assembly programming is understanding the difference between a value, an address, and the memory location represented by that address."
            />

            <div className="content-stack">
              <p>
                Registers provide the processor with very fast working storage.
                Main memory provides a much larger space for storing
                instructions and data. Assembly instructions can operate
                directly on registers, use immediate values, or access data
                stored in memory.
              </p>

              <p>
                Consider the following instruction:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, rbx`}</code>
                </pre>
              </div>

              <p>
                This copies the value currently held in RBX into RAX. It does
                not access the memory location whose address might happen to
                be stored in RBX.
              </p>

              <p>
                Now compare it with:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, [rbx]`}</code>
                </pre>
              </div>

              <p>
                Here the square brackets indicate a memory operand. The value
                in RBX is interpreted as an address, and the processor reads
                the data stored at that memory location.
              </p>

              <Link href="/technologies/nasm" className="text-link">
                ← Return to the complete NASM guide
              </Link>
            </div>
          </div>
        </section>

        {/* Values and addresses */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="VALUES & ADDRESSES"
              title="The distinction that makes memory addressing easier."
              body="An address tells the processor where something is located. A value is the data stored there or the data being manipulated."
            />

            <div className="two-column">
              <div>
                <h3>Value</h3>

                <p>
                  A value is the actual data being used by the program. It
                  might represent an integer, character, pointer, flag, part of
                  an object, or some other piece of information.
                </p>

                <div className="code-block">
                  <pre>
                    <code>{`mov rax, 42`}</code>
                  </pre>
                </div>

                <p>
                  Here, the immediate value 42 is placed directly into RAX.
                </p>
              </div>

              <div>
                <h3>Address</h3>

                <p>
                  An address identifies a location in memory. A register can
                  contain such an address and then be used as part of a memory
                  operand.
                </p>

                <div className="code-block">
                  <pre>
                    <code>{`mov rax, [rbx]`}</code>
                  </pre>
                </div>

                <p>
                  In this example, the contents of RBX are treated as the
                  address from which data should be loaded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Addressing forms */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="ADDRESSING FORMS"
              title="How NASM constructs memory operands."
              body="x86-64 provides flexible ways to calculate effective addresses. These forms are particularly useful when working with arrays, structures, buffers, pointers, and stack frames."
            />

            <div className="feature-grid">
              {addressingTypes.map((item) => (
                <article className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>

                  <div className="code-block">
                    <pre>
                      <code>{item.syntax}</code>
                    </pre>
                  </div>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Square brackets */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="NASM SYNTAX"
              title="What do square brackets mean?"
              body="In NASM syntax, square brackets are a critical visual clue that the instruction is accessing memory rather than simply using the value contained in a register."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, rbx
mov rax, [rbx]`}</code>
                </pre>
              </div>

              <div className="two-column">
                <div>
                  <h3>Without brackets</h3>

                  <p>
                    <code>MOV RAX, RBX</code> copies the value contained in RBX
                    into RAX.
                  </p>
                </div>

                <div>
                  <h3>With brackets</h3>

                  <p>
                    <code>MOV RAX, [RBX]</code> uses the contents of RBX as a
                    memory address and loads the value stored there.
                  </p>
                </div>
              </div>

              <p>
                This distinction is fundamental. Many early assembly mistakes
                come from treating a pointer value as though it were the data
                stored at that pointer.
              </p>
            </div>
          </div>
        </section>

        {/* Effective address */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="EFFECTIVE ADDRESS"
              title="Base, index, scale and displacement."
              body="A memory operand can be constructed from several components, allowing programs to calculate the location of an element efficiently."
            />

            <div className="content-stack">
              <p>
                A common x86-64 addressing form can be represented conceptually
                as:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`base + index × scale + displacement`}</code>
                </pre>
              </div>

              <p>
                The base register provides a starting address. The index
                register can represent an element position. The scale accounts
                for the size of each element, and the displacement provides an
                additional fixed offset.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, [rbx + rcx*8]`}</code>
                </pre>
              </div>

              <p>
                If RBX represents the beginning of an array and RCX represents
                an element index, multiplying the index by eight is appropriate
                when each element occupies eight bytes. The resulting effective
                address identifies the requested element.
              </p>
            </div>
          </div>
        </section>

        {/* Arrays */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ARRAYS"
              title="Using memory addressing to traverse arrays."
              body="Arrays provide one of the clearest practical examples of why base, index, and scale addressing are useful."
            />

            <div className="content-stack">
              <p>
                Suppose an array contains 64-bit integer values. Each element
                occupies eight bytes. If a register contains the address of the
                first element, the address of another element can be calculated
                using its index multiplied by eight.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`; RBX = address of array
; RCX = element index

mov rax, [rbx + rcx*8]`}</code>
                </pre>
              </div>

              <p>
                If RCX is zero, the first element is accessed. If RCX is one,
                the address advances by eight bytes. If RCX is two, it advances
                by sixteen bytes, and so on.
              </p>

              <p>
                This pattern appears throughout low-level programming and is
                particularly useful when studying arrays, pointers, compiled
                code, and data structures.
              </p>
            </div>
          </div>
        </section>

        {/* LEA */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LEA"
              title="LEA calculates an address without loading the data."
              body="LEA, or Load Effective Address, is frequently misunderstood because its name suggests a memory load. It actually calculates an address and places that address into a register."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`lea rax, [rbx + rcx*8]`}</code>
                </pre>
              </div>

              <p>
                The instruction above calculates the effective address
                represented by the expression inside the brackets and places
                that address into RAX. It does not load the value stored at
                that address.
              </p>

              <p>
                This makes LEA useful for address calculations and certain
                arithmetic expressions where the addressing hardware can
                efficiently construct the desired result.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, [rbx + rcx*8]
lea rdx, [rbx + rcx*8]`}</code>
                </pre>
              </div>

              <p>
                The first instruction accesses memory and retrieves the value.
                The second calculates the address itself. Understanding this
                distinction is essential when reading compiler-generated
                assembly.
              </p>
            </div>
          </div>
        </section>

        {/* Operand sizes */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="OPERAND SIZE"
              title="The processor needs to know how much data to access."
              body="A memory address alone does not always tell an instruction whether it should access one byte, two bytes, four bytes, or eight bytes."
            />

            <div className="content-stack">
              <p>
                Assembly programs frequently work with values of different
                widths. The instruction and its operands must therefore provide
                enough information for the processor to determine the intended
                data size.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Common width</th>
                      <th>Typical register form</th>
                      <th>Example concept</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>8-bit</td>
                      <td>AL</td>
                      <td>Byte-sized data</td>
                    </tr>
                    <tr>
                      <td>16-bit</td>
                      <td>AX</td>
                      <td>Word-sized data</td>
                    </tr>
                    <tr>
                      <td>32-bit</td>
                      <td>EAX</td>
                      <td>Doubleword-sized data</td>
                    </tr>
                    <tr>
                      <td>64-bit</td>
                      <td>RAX</td>
                      <td>Quadword-sized data</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Understanding operand size becomes particularly important when
                working with arrays, structures, strings, binary data, and
                mixed-width calculations.
              </p>
            </div>
          </div>
        </section>

        {/* Stack introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="THE X86-64 STACK"
              title="The stack is a structured region of memory."
              body="The stack provides temporary storage and plays a central role in procedure calls, saved state, return addresses, local variables, and stack frames."
            />

            <div className="content-stack">
              <p>
                Unlike a general-purpose data structure, the stack follows a
                particular access discipline. Data is typically added and
                removed according to a last-in, first-out pattern.
              </p>

              <p>
                In x86-64, RSP is the stack pointer. It tracks the current stack
                position, while instructions such as PUSH and POP adjust the
                stack as data is added or removed.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`push rax
push rbx

pop rbx
pop rax`}</code>
                </pre>
              </div>

              <p>
                In the example, the values are restored in reverse order. The
                last value pushed is the first value popped.
              </p>
            </div>
          </div>
        </section>

        {/* Stack concepts */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="STACK COMPONENTS"
              title="RSP, RBP, PUSH, POP, CALL and RET."
              body="These concepts should be learned together because they describe different parts of the same procedure and stack-management mechanism."
            />

            <div className="feature-grid">
              {stackConcepts.map((item) => (
                <article className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PUSH and POP */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="STACK OPERATIONS"
              title="How PUSH and POP change the stack."
              body="PUSH and POP provide a straightforward mechanism for saving and restoring values during program execution."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 100
mov rbx, 200

push rax
push rbx

pop rcx
pop rdx`}</code>
                </pre>
              </div>

              <p>
                The values are pushed in the order RAX and then RBX. Because
                the stack is last-in, first-out, POP places RBX's saved value
                into RCX and RAX's saved value into RDX.
              </p>

              <p>
                This simple pattern demonstrates why stack order matters when
                saving registers or temporary values.
              </p>
            </div>
          </div>
        </section>

        {/* CALL and RET */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PROCEDURES"
              title="CALL and RET connect control flow with the stack."
              body="Procedure calls require the program to remember where execution should continue after the procedure finishes."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`call calculate

; execution continues here
; after calculate returns

calculate:
    ; procedure instructions
    ret`}</code>
                </pre>
              </div>

              <p>
                CALL transfers execution to the procedure and preserves a
                return location. RET then uses the saved return information to
                continue execution after the original CALL.
              </p>

              <p>
                The exact stack layout around a procedure depends on the
                architecture, calling convention, compiler, optimisation
                choices, and the procedure's own instructions. This is why
                understanding the stack is so important when debugging or
                analysing compiled programs.
              </p>
            </div>
          </div>
        </section>

        {/* Stack frames */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="STACK FRAMES"
              title="How procedures organise local data."
              body="A stack frame provides a useful conceptual model for understanding local variables, saved registers, parameters, and return information associated with a procedure."
            />

            <div className="content-stack">
              <p>
                A traditional stack-frame model often uses RBP as a stable
                reference point and RSP to track the current top of the stack.
                Local variables and saved state can then be accessed at known
                offsets.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`push rbp
mov rbp, rsp

; procedure body

mov rsp, rbp
pop rbp
ret`}</code>
                </pre>
              </div>

              <p>
                This is a simplified educational model of a procedure
                prologue and epilogue. Modern compilers may omit the frame
                pointer or organise the stack differently, especially when
                optimisation is enabled.
              </p>

              <p>
                Nevertheless, understanding this conventional model provides a
                strong foundation for reading assembly and examining stack
                frames in a debugger.
              </p>
            </div>
          </div>
        </section>

        {/* Local variables */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="LOCAL DATA"
              title="Accessing local variables through stack offsets."
              body="Once a stack frame has been established, fixed offsets can be used to access data associated with the current procedure."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`push rbp
mov rbp, rsp

sub rsp, 16

mov qword [rbp-8], 42
mov rax, [rbp-8]

mov rsp, rbp
pop rbp
ret`}</code>
                </pre>
              </div>

              <p>
                The example reserves stack space and stores a value at an
                offset relative to RBP. The value is then loaded back into RAX.
              </p>

              <p>
                The exact layout of a real compiled function can be more
                complicated, but the example demonstrates the fundamental
                relationship between a stack frame, an address, and a local
                memory location.
              </p>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="COMMON MISTAKES"
              title="Where beginners often get memory and stack concepts wrong."
              body="Most difficulties come from mixing up values, addresses, operand sizes, and stack state."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>Forgetting the brackets</h3>
                <p>
                  Confusing <code>MOV RAX, RBX</code> with{' '}
                  <code>MOV RAX, [RBX]</code> changes whether the instruction
                  copies a register value or accesses memory.
                </p>
              </article>

              <article className="feature-card">
                <h3>Using the wrong element scale</h3>
                <p>
                  Array addressing depends on element size. An incorrect scale
                  can cause the program to access the wrong memory location.
                </p>
              </article>

              <article className="feature-card">
                <h3>Ignoring operand width</h3>
                <p>
                  Reading or writing the wrong number of bytes can corrupt
                  data or produce results that do not match expectations.
                </p>
              </article>

              <article className="feature-card">
                <h3>Losing track of RSP</h3>
                <p>
                  Every stack operation changes the stack state. An incorrect
                  push/pop sequence can make procedure returns and saved
                  registers fail.
                </p>
              </article>

              <article className="feature-card">
                <h3>Assuming RBP is always required</h3>
                <p>
                  RBP is useful for learning stack frames, but optimised
                  programs may use it differently or omit a traditional frame
                  pointer altogether.
                </p>
              </article>

              <article className="feature-card">
                <h3>Confusing LEA with a memory load</h3>
                <p>
                  LEA calculates an effective address. It does not retrieve the
                  value stored at that address.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Putting it together */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PUTTING IT TOGETHER"
              title="Memory addressing and the stack work together."
              body="The same concepts appear repeatedly in real programs: addresses identify data, registers hold working values, and the stack provides temporary storage and procedure state."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`push rbp
mov rbp, rsp

sub rsp, 16

mov qword [rbp-8], 25
mov rax, [rbp-8]

add rax, 5

mov rsp, rbp
pop rbp
ret`}</code>
                </pre>
              </div>

              <p>
                This simplified example combines several concepts from the
                guide. A stack frame is established, local space is reserved,
                a value is stored in memory, that value is loaded into a
                register, arithmetic is performed, and the stack frame is
                removed before returning.
              </p>

              <p>
                Being able to trace each of these steps is a key milestone in
                understanding x86-64 assembly.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="CONTINUE LEARNING"
              title="Continue through the NASM technology cluster."
              body="The remaining guides connect memory and stack concepts with registers, Linux system calls, and debugging."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>NASM Complete Guide</h3>
                <p>
                  Return to the main NASM resource for the broader x86-64
                  programming roadmap.
                </p>

                <Link href="/technologies/nasm" className="text-link">
                  Open the complete NASM guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Registers & Instructions</h3>
                <p>
                  Review general-purpose registers, flags, data movement,
                  arithmetic, comparisons, jumps, and bitwise instructions.
                </p>

                <Link
                  href="/technologies/nasm/registers-instructions"
                  className="text-link"
                >
                  Review registers and instructions →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Linux, System Calls & Debugging</h3>
                <p>
                  Learn how NASM programs interact with Linux and how tools can
                  be used to inspect execution.
                </p>

                <Link
                  href="/technologies/nasm/system-calls-debugging"
                  className="text-link"
                >
                  Explore system calls and debugging →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Academic relevance */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="ACADEMIC & TECHNICAL WORK"
              title="Why memory and stack concepts matter."
              body="Memory addressing and stack management are fundamental topics in computer architecture, operating systems, systems programming, cybersecurity, and reverse engineering."
            />

            <div className="content-stack">
              <p>
                Academic work involving NASM may require students to explain
                how data is represented in memory, demonstrate addressing
                techniques, trace stack operations, analyse procedure calls,
                or document how local variables and parameters are handled.
              </p>

              <p>
                These concepts also provide a foundation for understanding
                compiled programs and low-level behaviour during debugging and
                binary analysis.
              </p>

              <p>
                ProjectAssignments provides structured technical and academic
                guidance for complex computing work, with an emphasis on
                understanding the concepts and reasoning behind the work.
              </p>

              <Link href="/services" className="text-link">
                Explore our technical academic services →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(memorySchema),
        }}
      />
    </>
  )
}