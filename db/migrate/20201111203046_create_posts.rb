class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :username , default: 'Fredz'
      t.text :body
      t.integer :likes_count
      t.integer :repost_count

      t.timestamps
    end
  end
end
