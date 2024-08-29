import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import { CompletionsDto } from './dtos/completions.dto';
import { AssistantDto } from './dtos/assistant.dto';
import { threadId } from 'worker_threads';

@Injectable()
export class AIService {
  openai = new OpenAI();

  async askChat(completions: CompletionsDto) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful programmer please give IT advices.',
        },
        { role: 'user', content: completions.message },
      ],
    });

    console.log(completion);
    // console.log(completion.choices[0]);
    return {
      output: {
        userPrompt: completions.message,
        response: completion,
      },
    };
  }

  async askAssistant(assistantDto: AssistantDto) {
    const assistant = await this.openai.beta.assistants.retrieve(
      process.env.OPENAI_ASSISTANT_ID
    );
    const assistantID = assistant.id;

    const thread = await this.openai.beta.threads.create();
    const threadId = thread.id;

    const messages = await this.openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: assistantDto.message,
    });

    let run = await this.openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantID,
    });

    const runId = run.id;

    run = await this.openai.beta.threads.runs.retrieve(threadId, runId);
    //queued, in_progress, cancelling

    while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      run = await this.openai.beta.threads.runs.retrieve(threadId, runId);

      if (run.status === 'completed') {
        const outputMessage = await this.openai.beta.threads.messages.list(
          threadId
        );
        return {
          assistant,
          thread,
          messages,
          run,
          outputMessage,
        };
      }
    }

    return {
      assistant,
      thread,
      messages,
      run,
    };
  }
}
