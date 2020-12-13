type CallbackType<T> = (err?: Error | undefined | null, result?: T) => any

export function toPromise<T>(task: (cb: CallbackType<T>) => void): Promise<T> {
  return new Promise((resolve, reject) => {
    task((err, result) => {
      if (err) return void reject(err)
      resolve(result)
    })
  })
}
