import callbackThen from '../index'

describe('callbackThen', () => {
  it('should convert a callback-based async function to a promise', async () => {
    await expect(
      callbackThen((cb) => {
        setTimeout(() => {
          cb(null, 10)
        }, 0)
      }),
    ).resolves.toMatchInlineSnapshot(`10`)
  })

  it('should convert a callback-based async function to a promise', async () => {
    const err = new Error('boom')
    await expect(
      callbackThen((cb) => {
        setTimeout(() => {
          cb(err)
        }, 0)
      }),
    ).rejects.toBe(err)
  })
})
