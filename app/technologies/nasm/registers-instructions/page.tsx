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
    'NASM Registers & x86-64 Assembly Instructions | ProjectAssignments',
  description:
    'Learn x86-64 registers and NASM assembly instructions in detail, including RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15, RIP, RFLAGS, data movement, arithmetic, comparisons, jumps, bitwise operations, and stack instructions.',
  keywords: [
    'NASM registers',
    'x86-64 registers',
    'NASM instructions',
    'x86-64 assembly instructions',
    'NASM assembly instructions',
    'RAX RBX RCX RDX',
    'RSP RBP',
    'RIP register',
    'RFLAGS register',
    'NASM tutorial',
    'assembly language registers',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/technologies/nasm/registers-instructions',
  },
  openGraph: {
    title:
      'NASM Registers & x86-64 Assembly Instructions | ProjectAssignments',
    description:
      'A practical guide to x86-64 registers and NASM assembly instructions, from data movement and arithmetic to control flow, bitwise operations, and stack management.',
    url:
      'https://projectassignments.com/technologies/nasm/registers-instructions',
    siteName: 'ProjectAssignments',
    type: 'article',
  },
}

const registerRows = [
  {
    register: 'RAX',
    role: 'Accumulator / general-purpose register',
    detail:
      'Frequently used for arithmetic operations, function return values, and Linux x86-64 system-call numbers.',
  },
  {
    register: 'RBX',
    role: 'General-purpose register',
    detail:
      'Available for general computation and data storage, subject to the calling convention used by the surrounding program.',
  },
  {
    register: 'RCX',
    role: 'General-purpose / counter register',
    detail:
      'Can hold general data and is commonly encountered in counting and loop-related operations.',
  },
  {
    register: 'RDX',
    role: 'General-purpose / data register',
    detail:
      'Used for general computation and has specialised roles in some arithmetic and calling-convention contexts.',
  },
  {
    register: 'RSI',
    role: 'General-purpose / source register',
    detail:
      'Commonly associated with source data and function arguments under common x86-64 calling conventions.',
  },
  {
    register: 'RDI',
    role: 'General-purpose / destination register',
    detail:
      'Commonly associated with destination data and the first function argument under the System V AMD64 ABI.',
  },
  {
    register: 'RSP',
    role: 'Stack pointer',
    detail:
      'Points to the current top of the stack and is fundamental to stack operations, procedure calls, and stack frames.',
  },
  {
    register: 'RBP',
    role: 'Base / frame pointer',
    detail:
      'Traditionally used to reference locations within a stack frame, although modern optimising compilers may use it as a general-purpose register.',
  },
  {
    register: 'RIP',
    role: 'Instruction pointer',
    detail:
      'Identifies the current instruction location and is central to sequential execution and control-flow operations.',
  },
  {
    register: 'R8–R15',
    role: 'Additional general-purpose registers',
    detail:
      'Eight additional 64-bit general-purpose registers introduced as part of the x86-64 architecture.',
  },
]

const instructionGroups = [
  {
    title: 'Data movement',
    instructions: ['MOV', 'LEA', 'XCHG'],
    description:
      'Move values between registers and memory, calculate effective addresses, or exchange register contents.',
  },
  {
    title: 'Arithmetic',
    instructions: ['ADD', 'SUB', 'INC', 'DEC', 'NEG', 'IMUL'],
    description:
      'Perform addition, subtraction, increment/decrement, negation, and multiplication operations.',
  },
  {
    title: 'Comparison & control flow',
    instructions: ['CMP', 'TEST', 'JMP', 'JE', 'JNE', 'JL', 'JG'],
    description:
      'Compare values, update flags, and alter execution flow using unconditional and conditional jumps.',
  },
  {
    title: 'Logical & bitwise',
    instructions: ['AND', 'OR', 'XOR', 'NOT'],
    description:
      'Perform bit-level logical operations that are important in low-level programming, masking, and systems work.',
  },
  {
    title: 'Bit shifting',
    instructions: ['SHL', 'SHR', 'SAL', 'SAR'],
    description:
      'Shift bits left or right and provide useful operations for binary manipulation and efficient arithmetic.',
  },
  {
    title: 'Stack & procedures',
    instructions: ['PUSH', 'POP', 'CALL', 'RET'],
    description:
      'Manage stack data and support procedure calls and returns.',
  },
]

const registerSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/technologies/nasm/registers-instructions#webpage',
      url:
        'https://projectassignments.com/technologies/nasm/registers-instructions',
      name:
        'NASM Registers & x86-64 Assembly Instructions | ProjectAssignments',
      description:
        'A practical guide to x86-64 registers and NASM assembly instructions.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/technologies/nasm/registers-instructions#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/technologies/nasm/registers-instructions#breadcrumb',
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
          name: 'Registers & Instructions',
          item:
            'https://projectassignments.com/technologies/nasm/registers-instructions',
        },
      ],
    },
  ],
}

export default function NASMRegistersInstructionsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="NASM • REGISTERS & INSTRUCTIONS"
          title="x86-64 Registers and NASM Assembly Instructions: A Practical Guide."
          body="Understand the registers that hold data inside an x86-64 processor and the instructions that manipulate that data. This guide connects individual NASM instructions with the processor concepts behind them."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="THE FOUNDATION"
              title="Registers are the working space of the processor."
              body="Before learning large numbers of assembly instructions, it is important to understand where the processor keeps the values those instructions operate on."
            />

            <div className="content-stack">
              <p>
                A CPU register is a small storage location directly available
                to the processor. Registers are considerably smaller and faster
                than main memory, and individual instructions frequently use
                registers as their operands.
              </p>

              <p>
                In x86-64 assembly, the 64-bit general-purpose registers are
                commonly represented by names such as RAX, RBX, RCX, RDX, RSI,
                RDI, RSP, RBP, and R8 through R15. Other registers, including
                RIP and RFLAGS, have specialised roles in program execution.
              </p>

              <p>
                Understanding these registers makes NASM code much easier to
                read. Instead of seeing an instruction such as{' '}
                <code>MOV RAX, 10</code> as an arbitrary command, you can
                understand it as placing the value 10 into a particular
                processor register.
              </p>

              <Link href="/technologies/nasm" className="text-link">
                ← Return to the complete NASM guide
              </Link>
            </div>
          </div>
        </section>

        {/* Register overview */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="X86-64 REGISTERS"
              title="The major registers you should know."
              body="The x86-64 architecture provides several registers for general computation, control flow, stack management, and processor state."
            />

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Register</th>
                    <th>Typical role</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>

                <tbody>
                  {registerRows.map((row) => (
                    <tr key={row.register}>
                      <td>
                        <strong>{row.register}</strong>
                      </td>
                      <td>{row.role}</td>
                      <td>{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* General purpose registers */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="GENERAL-PURPOSE REGISTERS"
              title="RAX, RBX, RCX, RDX, RSI and RDI."
              body="These registers can hold data and participate in many different operations, although calling conventions and particular instructions may assign them specialised roles."
            />

            <div className="two-column">
              <div>
                <h3>RAX</h3>
                <p>
                  RAX is traditionally associated with accumulator-style
                  operations. It is also widely encountered as a return-value
                  register and has an important role in Linux x86-64 system
                  calls, where it identifies the requested system call.
                </p>

                <h3>RBX</h3>
                <p>
                  RBX is a general-purpose register that can hold data,
                  addresses, or intermediate results. Its exact usage depends
                  on the program and the calling convention involved.
                </p>

                <h3>RCX</h3>
                <p>
                  RCX is another general-purpose register and is often useful
                  for counters and loop-related operations. Particular
                  instructions may also use it implicitly.
                </p>
              </div>

              <div>
                <h3>RDX</h3>
                <p>
                  RDX is a general-purpose register with additional roles in
                  certain arithmetic operations and calling conventions.
                </p>

                <h3>RSI</h3>
                <p>
                  RSI can store general data but is also associated with source
                  operands and function arguments under common x86-64
                  conventions.
                </p>

                <h3>RDI</h3>
                <p>
                  RDI is a general-purpose register commonly used for
                  destination-related operations and as the first integer or
                  pointer argument under the System V AMD64 calling convention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack registers */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="STACK & EXECUTION"
              title="RSP, RBP and RIP have special importance."
              body="Some registers become particularly important when studying procedures, stack frames, debugging, and program execution."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>RSP — Stack Pointer</h3>
                <p>
                  RSP points to the current top of the stack. Instructions such
                  as PUSH and POP change the stack and therefore affect RSP.
                  Procedure calls also interact with the stack.
                </p>
              </article>

              <article className="feature-card">
                <h3>RBP — Base / Frame Pointer</h3>
                <p>
                  RBP is traditionally used to provide a stable reference point
                  within a stack frame. It can make local variables and saved
                  values easier to reason about while learning procedure
                  execution and debugging.
                </p>
              </article>

              <article className="feature-card">
                <h3>RIP — Instruction Pointer</h3>
                <p>
                  RIP identifies the current instruction location. Sequential
                  execution normally advances through instructions, while
                  branches, calls, returns, and other control-flow mechanisms
                  change where execution continues.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* RFLAGS */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="PROCESSOR STATE"
              title="RFLAGS: the register behind conditional decisions."
              body="Many arithmetic and comparison instructions affect processor flags. Conditional jumps then use those flags to decide whether execution should branch."
            />

            <div className="content-stack">
              <p>
                RFLAGS contains individual status and control flags. Some of
                the most important flags for introductory assembly programming
                include the Zero Flag, Carry Flag, Sign Flag, and Overflow
                Flag.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Flag</th>
                      <th>Concept</th>
                      <th>Typical significance</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <strong>ZF</strong>
                      </td>
                      <td>Zero Flag</td>
                      <td>
                        Indicates that an operation produced a zero result.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>CF</strong>
                      </td>
                      <td>Carry Flag</td>
                      <td>
                        Indicates a carry or borrow in relevant arithmetic
                        operations.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>SF</strong>
                      </td>
                      <td>Sign Flag</td>
                      <td>
                        Reflects the sign bit of the result in relevant
                        operations.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>OF</strong>
                      </td>
                      <td>Overflow Flag</td>
                      <td>
                        Indicates signed arithmetic overflow in relevant
                        operations.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                A useful way to think about this relationship is:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`CMP RAX, RBX
JE  equal_case`}</code>
                </pre>
              </div>

              <p>
                The <code>CMP</code> instruction performs a comparison by
                effectively subtracting one operand from another for the
                purpose of setting flags. The <code>JE</code> instruction can
                then branch when the comparison indicates equality.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-registers */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="REGISTER SIZES"
              title="RAX is more than one 64-bit value."
              body="x86-64 registers can often be accessed through smaller portions of the same register. Understanding these sub-registers is essential when reading low-level code."
            />

            <div className="content-stack">
              <p>
                A 64-bit general-purpose register can be accessed through
                different widths. For example, RAX represents the full
                64-bit register, while EAX refers to its lower 32 bits, AX to
                its lower 16 bits, and AL to its lower 8 bits.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Width</th>
                      <th>Relationship</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <strong>RAX</strong>
                      </td>
                      <td>64-bit</td>
                      <td>Full register</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>EAX</strong>
                      </td>
                      <td>32-bit</td>
                      <td>Low 32 bits of RAX</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>AX</strong>
                      </td>
                      <td>16-bit</td>
                      <td>Low 16 bits of RAX</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>AL</strong>
                      </td>
                      <td>8-bit</td>
                      <td>Low 8 bits of RAX</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Similar naming patterns exist for many other general-purpose
                registers. The exact effect of writing a smaller register is
                important in x86-64 programming, particularly when moving
                between 32-bit and 64-bit values.
              </p>
            </div>
          </div>
        </section>

        {/* Instruction groups */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="NASM INSTRUCTIONS"
              title="The instruction families you will encounter most often."
              body="NASM source code is built from instructions. Learning them by purpose is usually more useful than memorising a flat alphabetical list."
            />

            <div className="feature-grid">
              {instructionGroups.map((group) => (
                <article className="feature-card" key={group.title}>
                  <h3>{group.title}</h3>

                  <p>
                    <strong>{group.instructions.join(' · ')}</strong>
                  </p>

                  <p>{group.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MOV */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DATA MOVEMENT"
              title="MOV: the instruction you will see everywhere."
              body="MOV transfers data between compatible operands. It is one of the first instructions beginners encounter and remains fundamental throughout x86-64 programming."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 10
mov rbx, rax
mov rcx, 25`}</code>
                </pre>
              </div>

              <p>
                The first instruction places the immediate value 10 into RAX.
                The second copies the value from RAX into RBX. The third places
                25 into RCX.
              </p>

              <p>
                A useful distinction is that MOV copies a value; it does not
                inherently mean that a register becomes permanently associated
                with a particular value. The register contents can be changed
                by subsequent instructions.
              </p>
            </div>
          </div>
        </section>

        {/* Arithmetic */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="ARITHMETIC"
              title="ADD, SUB, INC, DEC and IMUL."
              body="Arithmetic instructions allow programs to transform values held in registers or memory."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 10
add rax, 5
sub rax, 2
inc rax
dec rax`}</code>
                </pre>
              </div>

              <p>
                After the sequence above, RAX contains 13. Each instruction
                changes the value stored in the destination according to its
                operation.
              </p>

              <p>
                Arithmetic instructions can also affect processor flags. Those
                flags may subsequently influence conditional branches, making
                arithmetic and control flow closely connected.
              </p>
            </div>
          </div>
        </section>

        {/* Control flow */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CONTROL FLOW"
              title="CMP, JMP and conditional branches."
              body="Assembly programs become more powerful when execution can make decisions and repeat sections of code."
            />

            <div className="content-stack">
              <p>
                A program normally executes instructions sequentially. Jump
                instructions change that sequence. An unconditional{' '}
                <code>JMP</code> always transfers execution to a target label,
                while conditional jumps depend on processor flags.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`cmp rax, rbx
je  values_equal
jg  rax_is_greater

values_equal:
    ; equality case

rax_is_greater:
    ; greater-than case`}</code>
                </pre>
              </div>

              <p>
                Labels give assembly programs named destinations. The
                combination of comparisons, flags, and conditional branches
                provides the foundation for if-statements, loops, and more
                complex control-flow structures.
              </p>
            </div>
          </div>
        </section>

        {/* Bitwise */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="BITWISE OPERATIONS"
              title="AND, OR, XOR and NOT."
              body="Bitwise instructions operate directly on individual bits and are especially important in systems programming, binary manipulation, cryptography-related concepts, and cybersecurity."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 0x0F
mov rbx, 0x03

and rax, rbx
xor rax, rax`}</code>
                </pre>
              </div>

              <p>
                AND, OR, XOR, and NOT provide direct bit-level operations.
                XORing a register with itself, for example, produces zero and
                is a common low-level pattern.
              </p>

              <p>
                These operations become particularly useful when working with
                bit masks, flags, packed data, permissions, binary protocols,
                and low-level algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* Shifts */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="SHIFTING BITS"
              title="SHL, SHR, SAL and SAR."
              body="Shift instructions move bits within an operand and are useful for binary manipulation and certain forms of arithmetic."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 4
shl rax, 1

mov rbx, 16
shr rbx, 2`}</code>
                </pre>
              </div>

              <p>
                A left shift can move bits toward more significant positions,
                while a right shift moves them toward less significant
                positions. The precise behaviour depends on the instruction
                and whether the operation is logical or arithmetic.
              </p>
            </div>
          </div>
        </section>

        {/* Stack instructions */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="STACK INSTRUCTIONS"
              title="PUSH, POP, CALL and RET."
              body="These instructions connect registers and control flow with the stack and are essential for understanding procedures and function calls."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`push rax
push rbx

pop rbx
pop rax`}</code>
                </pre>
              </div>

              <p>
                PUSH places data onto the stack and POP retrieves data from the
                stack. CALL and RET extend this concept to procedure execution
                by interacting with return addresses and control flow.
              </p>

              <p>
                These instructions are closely related to RSP and stack-frame
                management. We will examine this relationship in much greater
                depth in the dedicated memory and addressing guide.
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

        {/* Common mistakes */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="COMMON BEGINNER MISTAKES"
              title="What often makes NASM difficult at first?"
              body="Assembly becomes much easier when a few recurring conceptual mistakes are identified early."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>Confusing values and addresses</h3>
                <p>
                  A register can contain a value, an address, or an
                  intermediate result. Memory operands introduce another layer
                  that beginners need to distinguish carefully.
                </p>
              </article>

              <article className="feature-card">
                <h3>Ignoring operand sizes</h3>
                <p>
                  x86-64 instructions can operate on different operand widths.
                  Mixing 8-bit, 16-bit, 32-bit, and 64-bit operands without
                  understanding the consequences can produce unexpected
                  results.
                </p>
              </article>

              <article className="feature-card">
                <h3>Forgetting that instructions affect flags</h3>
                <p>
                  Arithmetic and comparison instructions can modify processor
                  flags. Later conditional branches may depend on those flags.
                </p>
              </article>

              <article className="feature-card">
                <h3>Treating registers as permanent variables</h3>
                <p>
                  Registers are shared working resources. Their contents can be
                  overwritten by later instructions, function calls, and
                  conventions governing how procedures preserve state.
                </p>
              </article>

              <article className="feature-card">
                <h3>Misunderstanding the stack</h3>
                <p>
                  Stack behaviour becomes confusing when PUSH, POP, CALL, RET,
                  RSP, and stack frames are learned separately rather than as
                  parts of one mechanism.
                </p>
              </article>

              <article className="feature-card">
                <h3>Memorising instead of tracing execution</h3>
                <p>
                  Assembly is easier to understand by tracing registers,
                  memory, flags, and control flow instruction by instruction.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Practical learning */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="PUTTING IT TOGETHER"
              title="The real skill is tracing what the processor is doing."
              body="A strong NASM foundation comes from connecting registers, instructions, memory, flags, and control flow rather than learning each topic in isolation."
            />

            <div className="content-stack">
              <p>
                Consider a simple operation in which a value is loaded into a
                register, modified, compared with another value, and then used
                to determine which branch of the program should execute.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, 20
mov rbx, 10

sub rax, rbx
cmp rax, 10
je  result_is_ten

mov rdi, 1
jmp done

result_is_ten:
    mov rdi, 0

done:
    ; continue execution`}</code>
                </pre>
              </div>

              <p>
                To understand this program, you need to follow the values in
                RAX and RBX, understand how SUB changes RAX and processor
                flags, understand what CMP tests, and then understand why JE
                either changes control flow or allows execution to continue.
              </p>

              <p>
                That ability to trace execution is more important than
                memorising isolated instruction definitions.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CONTINUE LEARNING"
              title="Continue through the NASM technology cluster."
              body="The supporting guides divide NASM into focused areas so that each major concept can be studied in depth."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>NASM Complete Guide</h3>
                <p>
                  Start with the main NASM guide for a broader introduction to
                  x86-64 assembly, memory, stacks, Linux, and debugging.
                </p>

                <Link href="/technologies/nasm" className="text-link">
                  Open the complete NASM guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Memory & Addressing</h3>
                <p>
                  Go deeper into memory operands, addressing modes, arrays,
                  pointers, the stack, PUSH/POP, CALL/RET, and stack frames.
                </p>

                <Link
                  href="/technologies/nasm/memory-addressing"
                  className="text-link"
                >
                  Explore memory and addressing →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Linux, System Calls & Debugging</h3>
                <p>
                  Learn how NASM programs interact with Linux and how debugging
                  tools can be used to inspect program execution.
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
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="ACADEMIC & TECHNICAL WORK"
              title="Why registers and instructions matter in academic projects."
              body="NASM often appears in computer architecture, operating systems, systems programming, cybersecurity, and low-level programming coursework."
            />

            <div className="content-stack">
              <p>
                A strong technical submission should do more than reproduce
                assembly instructions. Students may need to explain why a
                particular register is used, trace execution, interpret
                processor flags, document algorithms, explain memory
                operations, or justify design decisions.
              </p>

              <p>
                Understanding the underlying processor behaviour also makes it
                easier to explain debugging results, identify errors, and
                communicate technical decisions in reports and project
                demonstrations.
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
          __html: JSON.stringify(registerSchema),
        }}
      />
    </>
  )
}