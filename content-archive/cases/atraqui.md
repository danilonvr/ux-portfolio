---
source: https://danilovalois.framer.ai/project/atraqui
extracted: 2026-10-21
viewport: 1440px (desktop)
status: arquivo bruto — conteúdo guardado para o novo template de case. NÃO é usado no build.
---

<!--
Convenções deste arquivo:
- Texto copiado exatamente como está no Framer (inclusive erros de digitação).
- [IMAGE LxA ...] / [VIDEO LxA ...] = mídia no tamanho renderizado em 1440px + URL original no Framer.
  Baixar estes arquivos ANTES de cancelar o Framer.
- [LINK-BLOCK -> url] = bloco clicável inteiro.

Variação por breakpoint encontrada:
No tablet/mobile o Framer mostra uma versão MAIS CURTA dos cards de "Expected Results":
  - System Adoption / Users are expected to keep usage
  - Reduction in fees rate / Less fees charged for long staying
  - Optimisation of Analysis / Increased productivity by employees
  - More ships per period / Improved flow caused by automation.
-->

[VIDEO 992x708 src=https://framerusercontent.com/assets/fltCZ6l6c5SBhAaK2Ga6MeOg9A.mp4]

###### Product Design

# Smart Line Up: An Innovative Approach to Port Queue Management

##### Company

EMAP

##### Role

Product Designer

##### Duration

1 Month

##### Year

2025

### Context

Porto do Itaqui is one of Brazil's 10 largest ports, managed by EMAP. Their operations were held back by a manual line-up process run entirely on spreadsheets, where ship request data was entered by hand, queue organisation was slow and inconsistent, and business rules were hard to apply at scale.

### Solution

To solve this, EMAP partnered with UNDB's Software House to build a port queue automation system that collects ship request data via API and registers each vessel into the berthing queue according to the company's business rules, fully replacing the legacy spreadsheet.

The solution has simplified workflows, reduced demurrage costs (fees arising from delays in loading/unloading) and increased the port's operational capacity.

### Expected Results

System Adoption and Continued Usage

Users are expected to keep using the developed system.

Expected Reduction in demurrage rate

Less fees charged long periods staying in the port.

Optimisation of Analysis & Recording

More productivity by employees using the Line Up.

Higher number of ships served per period

Improved flow caused by port queue's automation.

[IMAGE 1120x755 alt="New Line Up System" src=https://framerusercontent.com/images/W138MN8iukHPzbG5xOHN3n08Jo.png]

[IMAGE 1120x755 alt="Old LineUp Spreadsheet" src=https://framerusercontent.com/images/ttOmZqBGKxAMoOwaxshp9MjhZq8.png]

### Research Insights

A research was conducted using public databases and port websites featuring spreadsheets similar to Itaqui's Line-Up. The goal was to analyse how other companies shared their queues.

#### Key Points

Most ports use similar properties to display queues, both in terms of ships and the berths they occupy.

The spreadsheets contain complex information, varying according to each port's specific needs.

Most of the analysed line-ups are organised by berth, making navigating and finding information easier.

The systems include dedicated pages for sharing details about docked vessels.

#### CSD

###### Certainties

The current process is problematic for users as it requires significant time and effort.

There is a certain level of resistance from the team towards using complex systems.

The TOS+ (Secondary System) does’nt meet user needs, failing to display all relevant info.

User acceptance depends on how much information is available with minimal complexity.

The workflow involves switching between three different environments.

Spreadsheet-based viewing has become a habit for users.

Although there are business rules, some information occasionally needs to be adjusted.

###### Suppositions

Users are not concerned with additional features.

The team appears cautious about what might be introduced next.

The tide table is unlikely to influence how the vessel queue is defined.

Manual reviews remain necessary, as line-up changes require approval from staff.

External clients may have some decision-making power.

###### Doubts

How can the team adopt the system without rejecting it?

What frustrations did users experience with previous systems?

How willing are users to change a process that has been embedded for years?

What is the most effective way to present data to users?

How can we reduce the time users spend on their current workflow?

How can a new system improve the existing work process?

What might be the consequences of replacing a complex spreadsheet with a web-based system?

### Our Meeting

We had a meeting to align expectations with the client. Due to access restrictions and logistical challenges, on-site visits to the company were not possible.

Through in-person discussions with EMAP team members, I identified the main inefficiencies impacting their workflow.

This direct approach helped to understanding real pain points, revealing critical challenges and opportunities for improvement throughout the process.

<!-- Carrossel com setas (as duas imagens 40x40 são os botões anterior/próximo) -->

[IMAGE 467x350 alt="" src=https://framerusercontent.com/images/GujkwNhRgMoBUOahgswRHZelP5g.png]

[IMAGE 467x349 alt="" src=https://framerusercontent.com/images/Pe3sd1oOwTeBqWFETIYPDEelRI.png]

[IMAGE 467x350 alt="" src=https://framerusercontent.com/images/pOwCLzWqmzOAmxDBhMkGlAJG6Dg.png]

[IMAGE 467x350 alt="" src=https://framerusercontent.com/images/9EJEUvmNTbEQ2SzX5IDAOFkAaEA.png]

[IMAGE 40x40 alt="" src=https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg]

[IMAGE 40x40 alt="" src=https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg]

[IMAGE 1120x590 alt="" src=https://framerusercontent.com/images/JV2p0zGGhg3P0HpArv5SieAc.png]

Employee's old workflow.

### Enhancing the Design Process with AI

Instead of showing only static screens, I've decided to use Figma Make to illustrate each microinteraction in practice.

This helped the client grasp the nuances of the interface and give precise feedback early on.

The AI-powered prototype helped validate complex microinteractions and clarified the application flow for users during usability testing.

[LINK-BLOCK -> https://ashen-ebook-55819267.figma.site]

CHECK THE AI PROTOTYPE

[VIDEO 492x351 src=https://framerusercontent.com/assets/XeZCm8jiAHxXFXE03rCzXXI6I.mp4]

### How it works?

Through the API’s communication with the system, berth requests are displayed on the requests screen, where the user can add them to the line-up to organise the vessel queue. Initially, this addition would be carried out manually. As the project evolves, the process will become automated.

[VIDEO 1072x765 src=https://framerusercontent.com/assets/Fjx3DR9CF5GwUIkxGU1RU.mp4]

#### Organising the vessel queue

Ships added to the line-up are organised automatically, following the company's business rules. This accelerates the organisation process and reduces the cognitive load on operators, whose only concern becomes reviewing the queue or adjusting positions in cases of urgency.

[VIDEO 1072x765 src=https://framerusercontent.com/assets/JE8YkGdvwsxFMDkywqxgP0PI1Rg.mp4]

#### supporting Screens

To add greater value to the system, coordinators and supervisors can not only create operational users, which facilitates audits and ensures tighter control over application activities, but also access the records of vessels and berths registered in the system. This simplifies database management and strengthens operational control.

[VIDEO 1072x765 src=https://framerusercontent.com/assets/0IAr3jJ3Z7FihqQQAJRO037c.mp4]

### Usability Testing

Usability tests were conducted with 6 users, responsible for using the new Line Up system, centred on:

[IMAGE 1120x228 alt="" src=https://framerusercontent.com/images/O8ZG0EcaU08UN5NqYu4XdJq8s.png]

The test focused on the new workflow that employees would have when using the system.

#### Highlights

P1 👩🏻‍🦱

“The process has improved a lot! Now I don't have to register and write anything, just review the results.”

P2 👨🏻

"It's better than I expected. I can see the agility of the map, and I like the minimalism of the system!"

P3 👨🏻‍🦱

Suggested focussing on consulting and the use of the application, rather than on other extra features.

P4 👩🏻

Brought up the need to include different types of visualisation so that the Line Up appeals to the most diverse users.

P5 👩🏻‍🦱

Missed the possibility of editing and removing ship information after it has been inserted into the Line Up.

P6 👨🏻‍🦳

Warned about compliance rules that were not followed, and the difficulty in understanding user permissions.

### Multidisciplinary Team Work

All the organisation and prioritisation of activities and sprints were organised by the team, with the help of feedback gathered during tests and a 2x2 matrix.

This approach enabled effective communication between Design and Development, in order to maintain the integrity of the schedule and the quality of the project developed.

[IMAGE 532x337 alt="" src=https://framerusercontent.com/images/TR5J0cPf1LS05NcciXEuJ7kBg8.png]

Matrix created after analysing the usability test feedback.

### If I Had More Time,  I'd like to…

###### Setup Google Analytics

To better manage the pre-established metrics.

###### Conduct More Usability Tests

To validate the new and updated features.

###### Create a New Project Roadmap

To evolve and enhance the developed system.

###### Prototype New features

To strengthen the workflow and improve experiece.

### Lessons learned

###### Align and Justify

By explaining the importance of design, I made the client feel more confident that everything would be completed on time.

###### Documentation

Documenting research and processes helped explain design decisions to both the client and the team.

###### Paying attention to the prototype

Creating a realistic scenario made users feel more comfortable and revealed some points during usability testing.

###### Shared success

Multidisciplinary collaboration supported the articulation of decisions made and was essential to the project's success.
