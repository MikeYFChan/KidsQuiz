# Study Steps

A focused, browser-based practice app for **Year 4** and **Year 7** students preparing for 11+ style assessments.

Students choose a year, subject, topic and difficulty, then complete a short multiple-choice practice set. They can also take a 10-question, 10-minute subject mock with answers reviewed at the end. Results include explanations, missed-question revision and a local practice history. The home page recommends a next topic based on recent results and topics not yet practised. Students can also choose a study buddy, earn stars for correct answers and completing a set, and spend stars on gifts for their buddy.

The parent dashboard summarises practice by subject and topic, with a year-group filter and recent activity. It is an at-a-glance view of the local progress data, not an official assessment or a school-specific exam report.

## Included subjects

- Maths
- English
- Verbal Reasoning
- Non-Verbal Reasoning
- Science

Science is provided as additional practice. The 11+ question bank is in [`questions.json`](questions.json). Its structure is:

```text
Year → Subject → Topic → Questions
```

Each question needs a `question`, four `choices`, an `answer`, and an `explanation`. New questions can also specify a `difficulty` of `foundation`, `core`, or `stretch`. Existing questions without a difficulty tag are treated as `core`; `Mixed practice` includes questions at every level.

## Run locally

Use any static web server from the project folder, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Privacy

Names, learning history, stars, buddy choice and gifts are stored only in the browser's local storage. They are not sent to a server and do not sync between devices. The parent dashboard has no separate sign-in or access control, so it should be opened on a device shared with the family.
