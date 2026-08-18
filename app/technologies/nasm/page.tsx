import {
    CTA,
    Footer,
    PageHero,
    SectionHeading,
} from '@/components/site'
import Link from 'next/link'

export const metadata = {
  title: 'NASM Assembly Language Guide: x86-64 Programming | ProjectAssignments',
  description:
    'Learn NASM assembly language and x86-64 programming from the fundamentals through registers, instructions, memory, addressing, stacks, procedures, Linux system calls, and debugging.',
  keywords: [
    'NASM assembly language',
    'NASM tutorial',
    'x86-64 assembly',
    'NASM x86-64',
    'assembly language programming',
    'NASM registers',
    'NASM instructions',
    'NASM Linux',
    'NASM programming',
  ],
}

export default function NASMPage() {
  return (
    <>

      <main>
        <PageHero
          eyebrow="NASM & x86-64 ASSEMBLY"
          title="NASM Assembly Language: A Practical Guide to x86-64 Programming."
          body="Understand NASM from the ground up — from registers and instructions to memory addressing, stacks, procedures, Linux system calls, and debugging. This guide is designed to make low-level programming easier to understand, explain, and apply."
        />

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="NASM fundamentals"
              title="What is NASM?"
              body="NASM, the Netwide Assembler, is an assembler used to translate human-readable assembly language into machine code. It is widely used for x86 and x86-64 programming and is particularly useful for understanding how software interacts with processors at a low level."
            />

            <div className="content-stack">
              <p>
                Assembly language sits much closer to the processor than
                languages such as Python, Java, or C. Instead of expressing a
                task through high-level abstractions, assembly exposes
                operations such as moving values between registers, performing
                arithmetic, comparing values, accessing memory, manipulating
                the stack, and transferring control between instructions.
              </p>

              <p>
                NASM provides a clear and widely used syntax for writing this
                type of code. It is especially valuable for students and
                developers studying computer architecture, operating systems,
                cybersecurity, reverse engineering, compiler concepts, and
                low-level software development.
              </p>

              <p>
                This page serves as the main NASM guide in the
                ProjectAssignments technology library. The supporting pages
                below go deeper into specific parts of x86-64 assembly.
              </p>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Why NASM matters"
              title="Why learn assembly language when high-level languages exist?"
              body="Assembly is not normally the fastest way to build everyday software, but it provides a level of visibility into computer operation that high-level languages intentionally hide."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>Understand the processor</h3>
                <p>
                  Assembly provides a practical way to understand registers,
                  instructions, flags, the instruction pointer, memory, and
                  the relationship between software and CPU execution.
                </p>
              </article>

              <article className="feature-card">
                <h3>Understand memory</h3>
                <p>
                  Concepts such as addresses, pointers, stack frames,
                  offsets, and addressing modes become much more concrete when
                  working directly with memory operands.
                </p>
              </article>

              <article className="feature-card">
                <h3>Study operating systems</h3>
                <p>
                  Low-level programming helps explain system calls, process
                  execution, calling conventions, stack management, and the
                  boundary between applications and the operating system.
                </p>
              </article>

              <article className="feature-card">
                <h3>Explore cybersecurity</h3>
                <p>
                  Assembly knowledge is particularly useful for reverse
                  engineering, binary analysis, vulnerability research,
                  debugging, malware analysis, and understanding compiled
                  programs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="The x86-64 foundation"
              title="Understanding the environment before writing NASM code."
              body="Modern NASM work often targets the x86-64 architecture. Before learning individual instructions, it helps to understand the basic components that an assembly program interacts with."
            />

            <div className="two-column">
              <div>
                <h3>Registers</h3>
                <p>
                  Registers are small, extremely fast storage locations inside
                  the processor. x86-64 provides a collection of general
                  purpose and specialised registers that are used for values,
                  addresses, stack management, control flow, and processor
                  state.
                </p>

                <h3>Memory</h3>
                <p>
                  Data that cannot or should not remain exclusively in
                  registers is stored in memory. NASM lets programmers access
                  memory through different addressing forms, making memory
                  addressing one of the most important concepts in assembly.
                </p>
              </div>

              <div>
                <h3>Instruction pointer</h3>
                <p>
                  The instruction pointer identifies the location associated
                  with the next instruction to be executed. In x86-64 this is
                  represented by RIP, the 64-bit instruction pointer register.
                </p>

                <h3>Flags</h3>
                <p>
                  The processor maintains status information through flags.
                  Instructions such as comparison and arithmetic operations can
                  affect these flags, which are then used by conditional
                  branches and other instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Registers & instructions"
              title="The building blocks of NASM programs."
              body="Most introductory NASM programs can be understood by learning how values move through registers and memory, how instructions transform those values, and how control flow changes the order of execution."
            />

            <div className="content-stack">
              <h3>Common x86-64 registers</h3>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Register</th>
                      <th>Typical role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RAX</td>
                      <td>Accumulator and common return-value register</td>
                    </tr>
                    <tr>
                      <td>RBX</td>
                      <td>General-purpose register</td>
                    </tr>
                    <tr>
                      <td>RCX</td>
                      <td>General-purpose and counting-related operations</td>
                    </tr>
                    <tr>
                      <td>RDX</td>
                      <td>General-purpose and arithmetic/data operations</td>
                    </tr>
                    <tr>
                      <td>RSI</td>
                      <td>General-purpose register and source-related operations</td>
                    </tr>
                    <tr>
                      <td>RDI</td>
                      <td>General-purpose register and destination-related operations</td>
                    </tr>
                    <tr>
                      <td>RSP</td>
                      <td>Stack pointer</td>
                    </tr>
                    <tr>
                      <td>RBP</td>
                      <td>Commonly used as a stack-frame base pointer</td>
                    </tr>
                    <tr>
                      <td>RIP</td>
                      <td>Instruction pointer</td>
                    </tr>
                    <tr>
                      <td>R8–R15</td>
                      <td>Additional general-purpose registers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Frequently encountered instructions</h3>

              <p>
                NASM programs are constructed from instructions. Some of the
                most important instructions for beginners include:
              </p>

              <ul>
                <li>
                  <strong>MOV</strong> — transfers data between registers,
                  memory, and immediate values.
                </li>
                <li>
                  <strong>ADD / SUB</strong> — perform arithmetic operations.
                </li>
                <li>
                  <strong>INC / DEC</strong> — increment or decrement values.
                </li>
                <li>
                  <strong>CMP</strong> — compares operands and updates
                  processor flags.
                </li>
                <li>
                  <strong>JMP</strong> — performs an unconditional jump.
                </li>
                <li>
                  <strong>JE / JNE / JL / JG</strong> — perform conditional
                  control-flow operations.
                </li>
                <li>
                  <strong>PUSH / POP</strong> — interact with the stack.
                </li>
                <li>
                  <strong>CALL / RET</strong> — support procedure calls and
                  returns.
                </li>
                <li>
                  <strong>AND / OR / XOR</strong> — perform bitwise logical
                  operations.
                </li>
                <li>
                  <strong>SHL / SHR</strong> — shift bits left or right.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="A simple example"
              title="Reading a NASM program."
              body="A small program is often the best way to understand the relationship between registers, instructions, labels, and control flow."
            />

            <div className="code-block">
              <pre>
                <code>{`section .text
    global _start

_start:
    mov rax, 60
    mov rdi, 0
    syscall`}</code>
              </pre>
            </div>

            <div className="content-stack">
              <p>
                Even this short example introduces several important concepts.
                The <code>section .text</code> directive identifies the section
                containing executable instructions, while <code>global</code>{' '}
                makes the entry symbol visible to the linker.
              </p>

              <p>
                The <code>mov</code> instructions place values into registers.
                The final <code>syscall</code> instruction transfers control to
                the operating system's system-call mechanism.
              </p>

              <p>
                The important lesson is not simply memorising the code. A
                strong understanding of NASM comes from knowing why each
                register is being used, how the operating system interprets
                those registers, and what happens to the processor state when
                the instruction executes.
              </p>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Memory & addressing"
              title="Where assembly becomes genuinely interesting."
              body="Moving values between registers is only part of assembly programming. Understanding how instructions locate data in memory is essential for writing meaningful x86-64 programs."
            />

            <div className="two-column">
              <div>
                <h3>Addresses and values</h3>
                <p>
                  An address identifies a location in memory, while the value
                  stored at that location is the data itself. Confusing these
                  two concepts is one of the most common difficulties for
                  beginners.
                </p>

                <h3>Addressing modes</h3>
                <p>
                  x86-64 supports several ways of constructing memory
                  operands. Registers can be combined with offsets, base
                  addresses, and index registers to locate data efficiently.
                </p>
              </div>

              <div>
                <h3>Memory operands</h3>
                <p>
                  NASM uses square brackets to indicate memory access. This
                  distinction is fundamental because moving a register's value
                  is different from accessing the memory location represented
                  by that register.
                </p>

                <h3>Why it matters</h3>
                <p>
                  Correct memory addressing is essential when working with
                  arrays, structures, buffers, strings, stack frames, and
                  dynamically managed data.
                </p>
              </div>
            </div>

            <div className="content-stack">
              <p>
                Our dedicated guide will explore x86-64 memory addressing and
                stack management in considerably more detail.
              </p>

              <Link
                href="/technologies/nasm/memory-addressing"
                className="text-link"
              >
                Explore NASM memory addressing and the stack →
              </Link>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="The stack & procedures"
              title="Understanding CALL, RET, PUSH, POP, RSP and RBP."
              body="The stack is central to procedure calls, temporary storage, saved state, and stack frames. Understanding it makes many otherwise confusing assembly programs much easier to follow."
            />

            <div className="content-stack">
              <p>
                The stack is a region of memory managed through the stack
                pointer. In x86-64, RSP identifies the current stack position.
                Instructions such as PUSH and POP modify the stack, while CALL
                and RET provide a mechanism for entering and leaving
                procedures.
              </p>

              <p>
                RBP is also commonly encountered when studying traditional
                stack-frame layouts. Although modern compilers can use registers
                differently depending on optimisation and calling conventions,
                learning the conventional RSP/RBP model provides a useful
                foundation.
              </p>

              <p>
                Once these concepts are understood, topics such as local
                variables, function parameters, return addresses, and debugging
                stack frames become much easier to understand.
              </p>

              <Link
                href="/technologies/nasm/memory-addressing"
                className="text-link"
              >
                Learn more about memory, stacks and addressing →
              </Link>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Linux & system calls"
              title="NASM beyond individual instructions."
              body="Writing useful assembly programs requires understanding how the program interacts with the operating system."
            />

            <div className="content-stack">
              <p>
                On Linux x86-64, applications can request operating-system
                services through system calls. Registers are used to identify
                the requested operation and provide the relevant arguments.
              </p>

              <p>
                This introduces an important distinction between an assembly
                instruction and an operating-system service. An instruction is
                executed by the processor, while a system call provides a
                controlled interface through which a user-space program can
                request functionality from the operating system kernel.
              </p>

              <p>
                Learning this boundary is particularly useful for students
                studying operating systems, cybersecurity, systems programming,
                and reverse engineering.
              </p>

              <Link
                href="/technologies/nasm/system-calls-debugging"
                className="text-link"
              >
                Explore NASM on Linux, system calls and debugging →
              </Link>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Learning path"
              title="A practical route to learning NASM."
              body="NASM becomes much easier when concepts are learned in a logical order rather than as a long list of instructions."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <span className="eyebrow">01</span>
                <h3>Learn computer architecture basics</h3>
                <p>
                  Understand CPUs, registers, memory, instructions, addresses,
                  and the basic fetch-decode-execute cycle.
                </p>
              </article>

              <article className="feature-card">
                <span className="eyebrow">02</span>
                <h3>Master registers and data movement</h3>
                <p>
                  Begin with MOV and learn how values move between immediate
                  operands, registers, and memory.
                </p>
              </article>

              <article className="feature-card">
                <span className="eyebrow">03</span>
                <h3>Learn arithmetic and control flow</h3>
                <p>
                  Study arithmetic, comparisons, flags, jumps, loops, labels,
                  and conditional execution.
                </p>
              </article>

              <article className="feature-card">
                <span className="eyebrow">04</span>
                <h3>Understand memory and the stack</h3>
                <p>
                  Move from simple register operations into addressing modes,
                  arrays, stack operations, procedures, and stack frames.
                </p>
              </article>

              <article className="feature-card">
                <span className="eyebrow">05</span>
                <h3>Work with the operating system</h3>
                <p>
                  Learn system calls, linking, executable formats, and how
                  user-space programs communicate with the operating system.
                </p>
              </article>

              <article className="feature-card">
                <span className="eyebrow">06</span>
                <h3>Debug and analyse programs</h3>
                <p>
                  Use debugging tools to inspect registers, memory,
                  instructions, stack frames, and program execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="NASM deep dives"
              title="Continue with the supporting guides."
              body="The NASM technology cluster will expand into focused guides so that each major concept can be studied without turning the main page into an unreadable reference manual."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>Registers & Instructions</h3>
                <p>
                  A practical reference to x86-64 registers, common
                  instructions, flags, arithmetic, bitwise operations, and
                  control flow.
                </p>
                <Link
                  href="/technologies/nasm/registers-instructions"
                  className="text-link"
                >
                  Read the registers and instructions guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Memory & Addressing</h3>
                <p>
                  Explore memory operands, addressing modes, the x86-64 stack,
                  PUSH/POP, CALL/RET, and stack-frame concepts.
                </p>
                <Link
                  href="/technologies/nasm/memory-addressing"
                  className="text-link"
                >
                  Read the memory and addressing guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Linux, System Calls & Debugging</h3>
                <p>
                  Learn how NASM programs interact with Linux and how tools
                  such as debuggers help you understand execution.
                </p>
                <Link
                  href="/technologies/nasm/system-calls-debugging"
                  className="text-link"
                >
                  Read the Linux and debugging guide →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <SectionHeading
              eyebrow="Academic & technical work"
              title="NASM is useful far beyond a programming exercise."
              body="Assembly language frequently appears in computer science coursework, systems programming projects, operating-system studies, cybersecurity exercises, and technical research."
            />

            <div className="content-stack">
              <p>
                A NASM-based assignment or project may require considerably
                more than writing a few instructions. Students may need to
                understand processor architecture, explain register usage,
                document algorithms, interpret memory operations, analyse
                execution, or connect assembly code with operating-system
                concepts.
              </p>

              <p>
                ProjectAssignments provides technical academic guidance,
                research support, and structured assistance for complex
                computing work. Our focus is on helping learners understand
                the technical reasoning behind their work rather than treating
                technical assignments as simple code-generation exercises.
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
    </>
  )
}