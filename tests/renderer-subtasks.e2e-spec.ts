import delay from 'delay'
import { mockProcessExit, mockProcessStderr, mockProcessStdout } from 'jest-mock-process'

import { Listr } from '@root/index'

describe('show subtasks', () => {
  let mockExit: jest.SpyInstance<never, [number?]>

  // eslint-disable-next-line @typescript-eslint/ban-types
  let mockStdout: jest.SpyInstance<boolean, [string, string?, Function?]>

  // eslint-disable-next-line @typescript-eslint/ban-types
  let mockStderr: jest.SpyInstance<boolean, [string, string?, Function?]>

  process.stdout.isTTY = true

  beforeEach(async () => {
    mockExit = mockProcessExit()
    mockStdout = mockProcessStdout()
    mockStderr = mockProcessStderr()
  })

  afterEach(async () => {
    mockExit.mockRestore()
    mockStdout.mockRestore()
    mockStderr.mockRestore()
    jest.clearAllMocks()
  })

  // JQYWVb3x1scokQK2IzhwA4F0qxWbYzXR
  it('should create a set of subtasks', async () => {
    await new Listr(
      [
        {
          title: 'This task will execute.',
          task: (ctx, task): Listr => task.newListr([
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(30)
              }
            },

            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(30)
              }
            }
          ])
        }
      ],
      {
        concurrent: false, rendererOptions: { lazy: true }
      }
    ).run()

    expect(mockStdout.mock.calls).toMatchSnapshot('JQYWVb3x1scokQK2IzhwA4F0qxWbYzXR-out')
    expect(mockStderr.mock.calls).toMatchSnapshot('JQYWVb3x1scokQK2IzhwA4F0qxWbYzXR-err')
    expect(mockExit.mock.calls).toMatchSnapshot('JQYWVb3x1scokQK2IzhwA4F0qxWbYzXR-exit')
  })

  // 3ygUxrTkCDLDfDrXzF1ocWR6626jaL0k
  it('should be able to change concurrency setting in subtask, second subtask should finish first', async () => {
    await new Listr(
      [
        {
          title: 'This task will execute.',
          task: (ctx, task): Listr => task.newListr([
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(30)
              }
            },

            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(20)
              }
            }
          ], { concurrent: true })
        }

      ],
      {
        concurrent: false, rendererOptions: { lazy: true }
      }
    ).run()

    expect(mockStdout.mock.calls).toMatchSnapshot('3ygUxrTkCDLDfDrXzF1ocWR6626jaL0k-out')
    expect(mockStderr.mock.calls).toMatchSnapshot('3ygUxrTkCDLDfDrXzF1ocWR6626jaL0k-err')
    expect(mockExit.mock.calls).toMatchSnapshot('3ygUxrTkCDLDfDrXzF1ocWR6626jaL0k-exit')
  })

  // 8TNRrm8bI9ndz4jrhYC492luGNhtMTmZ
  it('should be able to change collapse settings', async () => {
    await new Listr(
      [
        {
          title: 'This task will execute.',
          task: (ctx, task): Listr => task.newListr([
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(30)
              }
            },

            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(20)
              }
            }
          ])
        },

        {
          title: 'This task will execute.',
          task: (ctx, task): Listr => task.newListr([
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(30)
              }
            },

            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(20)
              }
            }
          ], { rendererOptions: { collapse: false } })
        }

      ],
      {
        concurrent: false, rendererOptions: { lazy: true, collapse: true }
      }
    ).run()

    expect(mockStdout.mock.calls).toMatchSnapshot('8TNRrm8bI9ndz4jrhYC492luGNhtMTmZ-out')
    expect(mockStderr.mock.calls).toMatchSnapshot('8TNRrm8bI9ndz4jrhYC492luGNhtMTmZ-err')
    expect(mockExit.mock.calls).toMatchSnapshot('8TNRrm8bI9ndz4jrhYC492luGNhtMTmZ-exit')
  })

  // 12ttDlnth5pr1YuJEnfXm3I2CzRbcFlY
  it('should be able to change exit on error', async () => {
    try {
      await new Listr(
        [
          {
            title: 'This task will execute and not quit on errors.',
            task: (ctx, task): Listr => task.newListr([
              {
                title: 'This is a subtask.',
                task: async (): Promise<void> => {
                  throw new Error('I have failed [0]')
                }
              },
              {
                title: 'This is an another subtask.',
                task: async (): Promise<void> => {
                  throw new Error('I have failed [1]')
                }
              },
              {
                title: 'This is yet an another subtask.',
                task: async (ctx, task): Promise<void> => {
                  task.title = 'I have succeeded.'
                }
              }
            ], { exitOnError: false })
          },
          {
            title: 'This task will execute.',
            task: (): void => {
              throw new Error('exit')
            }
          }
        ],
        {
          concurrent: false, exitOnError: true, rendererOptions: { lazy: true }
        }
      ).run()

    } catch(e) {
      expect(e).toBeTruthy()
    }

    expect(mockStdout.mock.calls).toMatchSnapshot('12ttDlnth5pr1YuJEnfXm3I2CzRbcFlY-out')
    expect(mockStderr.mock.calls).toMatchSnapshot('12ttDlnth5pr1YuJEnfXm3I2CzRbcFlY-err')
    expect(mockExit.mock.calls).toMatchSnapshot('12ttDlnth5pr1YuJEnfXm3I2CzRbcFlY-exit')

  })

})
