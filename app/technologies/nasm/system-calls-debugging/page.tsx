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
    'NASM Linux System Calls & Debugging Guide | x86-64 Assembly | ProjectAssignments',
  description:
    'Learn NASM on Linux through x86-64 system calls, registers, linking, executable programs, GDB debugging, breakpoints, register and memory inspection, stack analysis, and practical troubleshooting.',
  keywords: [
    'NASM Linux',
    'NASM system calls',
    'x86-64 system calls',
    'NASM debugging',
    'GDB NASM',
    'NASM GDB tutorial',
    'Linux assembly programming',
    'NASM syscall',
    'x86-64 debugging',
    'assembly language debugging',
    'NASM linker',
    'NASM executable',
  ],
  alternates: {
    canonical:
      'https://projectassignments.com/technologies/nasm/system-calls-debugging',
  },
  openGraph: {
    title:
      'NASM Linux System Calls & Debugging Guide | ProjectAssignments',
    description:
      'A practical guide to Linux system calls, NASM linking, executable programs, GDB debugging, register inspection, memory analysis, and troubleshooting.',
    url:
      'https://projectassignments.com/technologies/nasm/system-calls-debugging',
    siteName: 'ProjectAssignments',
    type: 'article',
  },
}

const syscallRegisters = [
  {
    register: 'RAX',
    role: 'System-call number',
    description:
      'Identifies the Linux system call being requested.',
  },
  {
    register: 'RDI',
    role: 'Argument 1',
    description:
      'Contains the first system-call argument.',
  },
  {
    register: 'RSI',
    role: 'Argument 2',
    description:
      'Contains the second system-call argument.',
  },
  {
    register: 'RDX',
    role: 'Argument 3',
    description:
      'Contains the third system-call argument.',
  },
  {
    register: 'R10',
    role: 'Argument 4',
    description:
      'Used for the fourth system-call argument.',
  },
  {
    register: 'R8',
    role: 'Argument 5',
    description:
      'Used for the fifth system-call argument.',
  },
  {
    register: 'R9',
    role: 'Argument 6',
    description:
      'Used for the sixth system-call argument.',
  },
]

const debuggingSteps = [
  {
    number: '01',
    title: 'Assemble the source',
    description:
      'Convert the NASM source file into an object file while checking for syntax and assembly errors.',
  },
  {
    number: '02',
    title: 'Link the object',
    description:
      'Use a linker to combine the object file into an executable program with the required executable structure.',
  },
  {
    number: '03',
    title: 'Run the program',
    description:
      'Execute the program normally and observe its output, behaviour, exit status, and any visible errors.',
  },
  {
    number: '04',
    title: 'Start the debugger',
    description:
      'Load the executable into a debugger such as GDB when the program does not behave as expected.',
  },
  {
    number: '05',
    title: 'Inspect execution',
    description:
      'Use breakpoints, stepping, register inspection, memory inspection, and disassembly to understand what the processor is doing.',
  },
  {
    number: '06',
    title: 'Trace and fix',
    description:
      'Identify the point where the program state diverges from the intended behaviour, correct the source, and test again.',
  },
]

const debuggingTools = [
  {
    title: 'Breakpoints',
    description:
      'Pause execution at a selected instruction so that the current processor state can be examined before execution continues.',
  },
  {
    title: 'Single-stepping',
    description:
      'Execute instructions one at a time to trace changes in registers, memory, flags, and control flow.',
  },
  {
    title: 'Register inspection',
    description:
      'Examine general-purpose registers, the instruction pointer, stack pointer, and other processor state.',
  },
  {
    title: 'Memory inspection',
    description:
      'Examine the contents of memory at addresses referenced by registers, stack frames, pointers, or data structures.',
  },
  {
    title: 'Disassembly',
    description:
      'View machine-code instructions as assembly and compare the executable with the original source.',
  },
  {
    title: 'Stack analysis',
    description:
      'Inspect stack contents and stack frames when investigating procedures, saved registers, return addresses, or corrupted execution.',
  },
]

const commonProblems = [
  {
    title: 'The program does not assemble',
    description:
      'Check instruction syntax, operand compatibility, labels, directives, register names, and other source-level errors reported by NASM.',
  },
  {
    title: 'The executable does not link',
    description:
      'Check object-file generation, linker commands, entry points, architecture assumptions, and external symbols.',
  },
  {
    title: 'The program exits unexpectedly',
    description:
      'Inspect control flow, return instructions, system-call arguments, stack state, and the instruction pointer.',
  },
  {
    title: 'The output is incorrect',
    description:
      'Trace the data from its original source through registers and memory to determine where the value becomes incorrect.',
  },
  {
    title: 'The stack is corrupted',
    description:
      'Check PUSH/POP balance, stack-pointer changes, procedure prologues and epilogues, and any writes near the stack frame.',
  },
  {
    title: 'A system call behaves unexpectedly',
    description:
      'Verify the system-call number, argument registers, pointer values, buffer sizes, and return value.',
  },
]

const systemSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id':
        'https://projectassignments.com/technologies/nasm/system-calls-debugging#webpage',
      url:
        'https://projectassignments.com/technologies/nasm/system-calls-debugging',
      name:
        'NASM Linux System Calls & Debugging Guide | ProjectAssignments',
      description:
        'A practical guide to Linux system calls, NASM linking, executable programs, GDB debugging, register inspection, memory analysis, and troubleshooting.',
      isPartOf: {
        '@id': 'https://projectassignments.com/#website',
      },
      breadcrumb: {
        '@id':
          'https://projectassignments.com/technologies/nasm/system-calls-debugging#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://projectassignments.com/technologies/nasm/system-calls-debugging#breadcrumb',
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
          name: 'Linux, System Calls & Debugging',
          item:
            'https://projectassignments.com/technologies/nasm/system-calls-debugging',
        },
      ],
    },
  ],
}

export default function NASMSystemCallsDebuggingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="NASM • LINUX & DEBUGGING"
          title="NASM on Linux: System Calls, Linking and Debugging."
          body="Learn how x86-64 NASM programs interact with Linux through system calls, how source code becomes an executable, and how debugging tools can reveal what is actually happening inside a low-level program."
        />

        {/* Introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="FROM CODE TO EXECUTION"
              title="Assembly becomes useful when it can interact with the operating system."
              body="Writing individual instructions is only one part of low-level programming. A useful program must eventually interact with the operating system, produce an executable, and behave correctly when it runs."
            />

            <div className="content-stack">
              <p>
                A NASM source file is not itself a finished executable program.
                It must first be assembled into an object file and then linked
                into an executable. Once executed, the program runs in a
                particular operating-system environment and may request
                services from the Linux kernel.
              </p>

              <p>
                Understanding this complete path makes assembly programming
                much easier to reason about:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`NASM source
     ↓
Object file
     ↓
Linker
     ↓
Executable
     ↓
Process
     ↓
Linux system calls`}</code>
                </pre>
              </div>

              <p>
                This page connects those stages with practical debugging
                techniques.
              </p>

              <Link href="/technologies/nasm" className="text-link">
                ← Return to the complete NASM guide
              </Link>
            </div>
          </div>
        </section>

        {/* Assemble and link */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="BUILD PROCESS"
              title="From a .asm file to an executable."
              body="NASM source code normally passes through multiple stages before it becomes a program that the operating system can execute."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>1. Write the source</h3>
                <p>
                  The programmer writes assembly instructions, labels,
                  directives, data definitions, and other NASM source elements
                  in an assembly source file.
                </p>
              </article>

              <article className="feature-card">
                <h3>2. Assemble</h3>
                <p>
                  NASM translates the assembly source into machine-code
                  instructions and produces an object file containing the
                  assembled sections and related information.
                </p>
              </article>

              <article className="feature-card">
                <h3>3. Link</h3>
                <p>
                  A linker processes the object file and produces an executable
                  with the required executable structure and symbol
                  information.
                </p>
              </article>

              <article className="feature-card">
                <h3>4. Execute</h3>
                <p>
                  The operating system loads the executable into a process and
                  begins execution at its appropriate entry point.
                </p>
              </article>
            </div>

            <div className="content-stack" style={{ marginTop: '34px' }}>
              <p>
                A common educational workflow on Linux looks conceptually like
                this:
              </p>

              <div className="code-block">
                <pre>
                  <code>{`nasm -f elf64 program.asm -o program.o
ld program.o -o program

./program`}</code>
                </pre>
              </div>

              <p>
                The exact build command can vary depending on the operating
                system, linker, libraries, executable format, and whether the
                program uses external runtime components.
              </p>
            </div>
          </div>
        </section>

        {/* System calls */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="LINUX SYSTEM CALLS"
              title="How a NASM program requests services from Linux."
              body="A system call provides a controlled interface through which a user-space program can request functionality from the operating-system kernel."
            />

            <div className="content-stack">
              <p>
                A Linux x86-64 program cannot simply perform every privileged
                operation directly. Instead, it can request operating-system
                services through defined system-call interfaces.
              </p>

              <p>
                For the x86-64 Linux system-call convention, the system-call
                number is placed in RAX and arguments are passed through
                designated registers.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Register</th>
                      <th>Typical system-call role</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>

                  <tbody>
                    {syscallRegisters.map((item) => (
                      <tr key={item.register}>
                        <td>
                          <strong>{item.register}</strong>
                        </td>
                        <td>{item.role}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                The exact system-call number and argument requirements depend
                on the particular system call being requested.
              </p>
            </div>
          </div>
        </section>

        {/* Exit syscall */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="PRACTICAL EXAMPLE"
              title="A minimal Linux exit system call."
              body="A simple exit operation demonstrates the relationship between registers and the syscall instruction."
            />

            <div className="content-stack">
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

              <p>
                In this example, RAX contains the Linux x86-64 system-call
                number for <code>exit</code>, while RDI contains the exit
                status argument. The <code>syscall</code> instruction transfers
                control to the operating-system system-call mechanism.
              </p>

              <p>
                The important concept is the interface: the processor executes
                the SYSCALL instruction, while Linux interprets the register
                state according to its x86-64 system-call convention.
              </p>
            </div>
          </div>
        </section>

        {/* Write example */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="SYSTEM CALL EXAMPLE"
              title="Writing data through a Linux system call."
              body="System calls become more useful when a program passes pointers and sizes to the operating system."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`section .data
    message db "Hello from NASM!", 10
    length equ $ - message

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, message
    mov rdx, length
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall`}</code>
                </pre>
              </div>

              <p>
                The example demonstrates an important combination of concepts.
                The program has data in a separate section, calculates its
                length, places the required values into registers, requests
                the Linux write operation, and then exits.
              </p>

              <p>
                Notice that RSI contains the address of the message rather than
                the message itself. This connects directly to the memory
                addressing concepts covered in the previous guide.
              </p>

              <Link
                href="/technologies/nasm/memory-addressing"
                className="text-link"
              >
                ← Review NASM memory addressing and stack concepts
              </Link>
            </div>
          </div>
        </section>

        {/* Return values */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="RETURN VALUES"
              title="System calls return information too."
              body="A system call is not simply a one-way request. Linux returns a result through the processor registers, allowing the program to determine whether an operation succeeded or failed."
            />

            <div className="content-stack">
              <p>
                The return value of a Linux x86-64 system call is conventionally
                returned in RAX. Programs can therefore inspect RAX after the
                SYSCALL instruction and make subsequent decisions based on the
                result.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`syscall

; RAX now contains the system-call result

cmp rax, 0
jl  error`}</code>
                </pre>
              </div>

              <p>
                The exact meaning of the returned value depends on the system
                call. Understanding return values is essential when writing
                reliable low-level programs and when debugging unexpected
                behaviour.
              </p>
            </div>
          </div>
        </section>

        {/* Debugging introduction */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="DEBUGGING NASM"
              title="When the program is wrong, inspect the processor state."
              body="Assembly debugging becomes much more systematic when you stop treating the program as a black box and instead examine registers, memory, control flow, and stack state."
            />

            <div className="content-stack">
              <p>
                In a high-level language, a debugger can show variables,
                source-level expressions, function calls, and other abstractions
                that are familiar to the programmer. In assembly, many of
                those abstractions are much closer to the underlying processor.
              </p>

              <p>
                This makes debugging both more challenging and more
                informative. You can observe the exact registers and memory
                locations being modified as instructions execute.
              </p>

              <p>
                A useful debugging question is not simply:
                <strong> "Why did the program fail?"</strong>
              </p>

              <p>
                Instead ask:
                <strong>
                  {' '}
                  "At which instruction did the processor state stop matching
                  what I expected?"
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Debugging workflow */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DEBUGGING WORKFLOW"
              title="A systematic way to debug assembly programs."
              body="A repeatable workflow is more effective than randomly changing instructions and rerunning the program."
            />

            <div className="approach-grid">
              {debuggingSteps.map((step) => (
                <article className="approach-card" key={step.number}>
                  <span aria-hidden="true">{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GDB */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="GDB"
              title="Using GDB to inspect x86-64 execution."
              body="The GNU Debugger can be used to pause a program, step through instructions, inspect registers and memory, and examine the execution state."
            />

            <div className="content-stack">
              <p>
                When debugging an assembly program, it is useful to build the
                executable with debugging information where appropriate. The
                debugger can then provide more useful source-level context
                while still allowing the underlying machine state to be
                inspected.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`gdb ./program`}</code>
                </pre>
              </div>

              <p>
                Once inside GDB, commands can be used to establish breakpoints,
                execute instructions step by step, inspect registers, examine
                memory, and inspect the current instruction.
              </p>

              <p>
                The exact commands and debugging workflow depend on the
                executable and how it was assembled and linked, but the central
                principle remains the same: pause execution, inspect state,
                advance execution, and compare the observed state with the
                expected state.
              </p>
            </div>
          </div>
        </section>

        {/* Debugging tools */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="DEBUGGING TECHNIQUES"
              title="The most useful things to inspect."
              body="A debugger becomes much more powerful when you know which parts of the processor state matter for the problem you are investigating."
            />

            <div className="feature-grid">
              {debuggingTools.map((tool) => (
                <article className="feature-card" key={tool.title}>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Breakpoints and stepping */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="BREAKPOINTS & STEPPING"
              title="Stop execution at the point where things matter."
              body="A breakpoint allows the debugger to pause execution before a particular instruction runs, making it possible to inspect the current state."
            />

            <div className="content-stack">
              <p>
                Suppose a register is expected to contain a particular value
                before an arithmetic operation. A breakpoint placed before that
                instruction allows you to inspect the register and determine
                whether the problem occurred earlier or during the operation
                itself.
              </p>

              <p>
                Single-stepping then allows the next instruction to execute
                while you observe how the processor state changes.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`mov rax, 10
add rax, 20
cmp rax, 30
je  correct`}</code>
                </pre>
              </div>

              <p>
                A debugger can help determine whether RAX contained the
                expected value before ADD, whether ADD produced the expected
                result, whether CMP affected the expected flags, and whether
                the conditional jump behaved accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* Register inspection */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="REGISTER INSPECTION"
              title="Registers provide a snapshot of program state."
              body="When an assembly program behaves incorrectly, examining the registers often reveals exactly where the unexpected state originated."
            />

            <div className="content-stack">
              <p>
                Important registers to inspect may include RAX through R15,
                RSP, RBP, RIP, and relevant processor flags. Which registers
                matter most depends on the instruction or procedure being
                investigated.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`RAX  = current calculation / result
RSP  = current stack position
RBP  = stack-frame reference, when used
RIP  = current instruction location`}</code>
                </pre>
              </div>

              <p>
                Register inspection becomes particularly powerful when combined
                with single-stepping because you can compare the state before
                and after individual instructions.
              </p>

              <Link
                href="/technologies/nasm/registers-instructions"
                className="text-link"
              >
                ← Review NASM registers and instructions
              </Link>
            </div>
          </div>
        </section>

        {/* Memory debugging */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="MEMORY DEBUGGING"
              title="Inspecting memory when registers are not enough."
              body="Many assembly bugs are caused by incorrect pointers, offsets, buffer sizes, or overwritten memory."
            />

            <div className="content-stack">
              <p>
                If a register contains a pointer, inspecting the register alone
                may not explain the problem. You may also need to inspect the
                memory at that address and determine whether the expected data
                is actually present.
              </p>

              <p>
                This is particularly important when debugging:
              </p>

              <ul>
                <li>Arrays and buffers</li>
                <li>Strings</li>
                <li>Stack variables</li>
                <li>Pointers</li>
                <li>Structures and data layouts</li>
                <li>System-call arguments</li>
              </ul>

              <p>
                Memory debugging connects directly to the addressing concepts
                discussed in the previous NASM guide.
              </p>

              <Link
                href="/technologies/nasm/memory-addressing"
                className="text-link"
              >
                Review NASM memory addressing and stack concepts →
              </Link>
            </div>
          </div>
        </section>

        {/* Common problems */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="TROUBLESHOOTING"
              title="Common NASM and Linux problems."
              body="A structured troubleshooting process can quickly narrow down whether a problem originates in the source, build process, control flow, memory state, stack, or operating-system interface."
            />

            <div className="feature-grid">
              {commonProblems.map((problem) => (
                <article className="feature-card" key={problem.title}>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Practical debugging example */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="PRACTICAL ANALYSIS"
              title="Trace the program instead of guessing."
              body="The most reliable way to debug assembly is to establish what the program should do, then trace execution until the actual state differs from the expected state."
            />

            <div className="content-stack">
              <div className="code-block">
                <pre>
                  <code>{`mov rax, 10
mov rbx, 20

add rax, rbx

cmp rax, 30
jne error

mov rdi, 0
jmp done

error:
    mov rdi, 1

done:
    mov rax, 60
    syscall`}</code>
                </pre>
              </div>

              <p>
                If this program unexpectedly follows the error path, the
                debugging process should examine the values in RAX and RBX,
                verify the result of ADD, inspect the comparison, and determine
                why the conditional branch did not behave as expected.
              </p>

              <p>
                This method scales to much larger programs. Instead of
                changing several instructions at once, isolate the point where
                the program's actual state first differs from the expected
                state.
              </p>
            </div>
          </div>
        </section>

        {/* Cybersecurity relevance */}
        <section className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="CYBERSECURITY & REVERSE ENGINEERING"
              title="Why NASM knowledge matters beyond programming."
              body="Understanding assembly, memory, registers, system calls, and debugging provides an important foundation for analysing compiled software."
            />

            <div className="content-stack">
              <p>
                Security professionals and researchers frequently need to
                understand what compiled programs are doing at the machine-code
                level. Assembly knowledge helps make processor behaviour,
                function calls, memory access, control flow, and operating
                system interactions more visible.
              </p>

              <p>
                The same skills introduced in this NASM cluster can therefore
                support legitimate work in areas such as reverse engineering,
                vulnerability research, binary analysis, secure software
                development, and incident investigation.
              </p>

              <p>
                The emphasis should always remain on authorised analysis,
                controlled environments, research, education, and defensive
                security work.
              </p>

              <Link href="/services/cybersecurity" className="text-link">
                Explore our cybersecurity technical support →
              </Link>
            </div>
          </div>
        </section>

        {/* Complete cluster */}
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="COMPLETE THE NASM CLUSTER"
              title="Continue exploring NASM and x86-64 programming."
              body="The four pages together provide a structured path from the fundamentals of NASM through registers, memory, system calls, and debugging."
            />

            <div className="feature-grid">
              <article className="feature-card">
                <h3>NASM Complete Guide</h3>
                <p>
                  Start with the main overview covering NASM, x86-64
                  architecture, registers, instructions, memory, stacks,
                  Linux, and the learning path.
                </p>

                <Link href="/technologies/nasm" className="text-link">
                  Open the NASM guide →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Registers & Instructions</h3>
                <p>
                  Study RAX through R15, RIP, RFLAGS, data movement,
                  arithmetic, comparisons, jumps, bitwise operations, and
                  stack instructions.
                </p>

                <Link
                  href="/technologies/nasm/registers-instructions"
                  className="text-link"
                >
                  Explore registers and instructions →
                </Link>
              </article>

              <article className="feature-card">
                <h3>Memory & Addressing</h3>
                <p>
                  Explore addresses, memory operands, addressing modes, arrays,
                  LEA, RSP, RBP, PUSH, POP, CALL, RET, and stack frames.
                </p>

                <Link
                  href="/technologies/nasm/memory-addressing"
                  className="text-link"
                >
                  Explore memory and addressing →
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
              title="NASM is a practical gateway into low-level computing."
              body="System calls and debugging bring together many of the concepts studied throughout the NASM cluster."
            />

            <div className="content-stack">
              <p>
                Academic projects involving assembly may require students to
                implement programs, explain system interactions, analyse
                processor state, document debugging results, or demonstrate
                how source instructions translate into observable execution
                behaviour.
              </p>

              <p>
                Understanding the complete path from source code to executable
                program, system calls, registers, memory, stack state, and
                debugging makes it easier to explain technical decisions and
                defend project work.
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
          __html: JSON.stringify(systemSchema),
        }}
      />
    </>
  )
}